package com.shubham.studentsystem.service;


import java.util.List;

import com.shubham.studentsystem.entity.StudentEntity;

public interface StudentService {
	
	public StudentEntity saveStudentEntity(StudentEntity student);
	public List<StudentEntity> getAllStudentEntities();
}
