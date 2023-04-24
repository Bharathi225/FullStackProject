package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.DynamicUpdate;
/* It is a blueprint. Here we use public getter and setter methods for private attributes.
 * In this class we use @Entity and @Table. 
 * @Entity is used so that the class name will be table name in db.
 * For avoid to write query, we go for hibernate
 * @Dynamic update annotation is used for update values instead of checking all values in that record.  
 * It will check only which value will be updated*/
@Entity
@Table(name = "Student_info")
@DynamicUpdate
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "Stud_name", nullable=false)
	private String name;

	private int standard;

	@Column(name = "phone_no")
	private long contact;
	private String dateOfBirth;
	private String city;
	private String gender;

	public Student() {}

	public Student(int id, String name, int standard, long contact, String dateOfBirth, String city, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.standard = standard;
		this.contact = contact;
		this.dateOfBirth = dateOfBirth;
		this.city = city;
		this.gender = gender;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStandard() {
		return standard;
	}

	public void setStandard(int standard) {
		this.standard = standard;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
}