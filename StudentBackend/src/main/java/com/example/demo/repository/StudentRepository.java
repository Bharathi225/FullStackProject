package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Student;

//This Interface extends JpaRepository interface, so that @Repository is not needed to be annotated manually
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	List<Student> findByNameContaining(String name);
	List<Student> findByStandard(int standard );

}