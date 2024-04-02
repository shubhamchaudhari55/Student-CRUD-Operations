package com.shubham.studentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shubham.studentsystem.entity.StudentEntity;
import com.shubham.studentsystem.repository.StudentRepository;

@Service
public class StudentServiceImplement implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public StudentEntity saveStudentEntity(StudentEntity student) {
		return studentRepository.save(student);
	}

	@Override
	public List<StudentEntity> getAllStudentEntities() {
		return studentRepository.findAll();
	}
	

	

}
