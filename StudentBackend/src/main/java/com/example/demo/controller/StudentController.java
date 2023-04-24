package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptionHandling.ResourceNotFoundException;
import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

/* @RestController annotation is applied to a class to mark it as a request handler. 
 * This annotation itself annotated with @Controller and @ResponseBody. 
 * @Controller is used for mapping
 * @ResponseBody annotation tells a controller that the object returned is automatically serialized into JSON 
 * and passed back into the HttpResponse object. */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/studentDetails/backend/")
public class StudentController {

	@Autowired
	private StudentRepository studRepo;
	
	/* By using get mapping annotation, transfer data from client to server in HTTP protocol.
	 * It is used to get a single or multiple resources
	 * It carries request parameter appended in URL string */
	@GetMapping("/students")
	public ResponseEntity<List<Student>> getAllStudents(@RequestParam(required = false) String name){
		
		try {
			List<Student> studentList = new ArrayList<Student>();
			if(name != null) {
				studRepo.findByNameContaining(name).forEach(studentList::add);
				return new ResponseEntity<>(studentList, HttpStatus.OK);
			}
			else {
				studentList = studRepo.findAll();
				return new ResponseEntity<>(studentList, HttpStatus.OK);
			}
		}
		catch(Exception exception) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/* By using post mapping annotation, transfer data from client to server in HTTP protocol.
	 * POST carries request parameter in message body which makes it more secure
	 * way of transferring data from client to server.*/
	@PostMapping("/students")
	public Student createStudent(@RequestBody Student student) {
		return studRepo.save(student);
	}
	
	// get Student by id rest api
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
		Student student = studRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
		return ResponseEntity.ok(student);
	}

	/* This method is used to update/modify the resource 
	 * so @PutMapping annotation is used for mapping HTTP PUT requests onto specific handler methods.*/
	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Integer id, @RequestBody Student studentDetails){
		Student student = studRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
		
		student.setName(studentDetails.getName());
		student.setStandard(studentDetails.getStandard());
		student.setContact(studentDetails.getContact());
		student.setCity(studentDetails.getCity());
		student.setGender(studentDetails.getGender());
		student.setDateOfBirth(studentDetails.getDateOfBirth());
		
		Student updatedStudent = studRepo.save(student);
		return ResponseEntity.ok(updatedStudent);
	}

	/* The Delete HTTP method is used to delete the resource and @DeleteMapping annotation for mapping 
	 * HTTP DELETE requests onto specific handler methods.*/
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Integer id){
		Student student = studRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
		
		studRepo.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@DeleteMapping("/students")
	public ResponseEntity<HttpStatus> deleteAllStudents(){
		try {
			studRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/students/findByStandard")
	public ResponseEntity<List<Student>> findByStandard(@RequestParam(required = false) int grade){
		try {
		 List<Student> gradeStudents = studRepo.findByStandard(grade);
		 if(gradeStudents.isEmpty()){
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		 }
		 return new ResponseEntity<>(gradeStudents, HttpStatus.OK);
		}
		catch (Exception exception) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
}