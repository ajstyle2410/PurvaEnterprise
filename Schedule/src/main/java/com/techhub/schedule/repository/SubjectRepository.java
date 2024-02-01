package com.techhub.schedule.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techhub.schedule.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

}
