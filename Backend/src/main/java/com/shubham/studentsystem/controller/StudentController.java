package com.shubham.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shubham.studentsystem.entity.StudentEntity;
import com.shubham.studentsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
	public void add(@RequestBody StudentEntity student) {
		studentService.saveStudentEntity(student);
		
	}
	@GetMapping("/getAll")
	public  List<StudentEntity> getAllStudentEntities(){
		return studentService.getAllStudentEntities();
	}
	
}
