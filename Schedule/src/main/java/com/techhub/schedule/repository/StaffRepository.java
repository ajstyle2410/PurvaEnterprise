package com.techhub.schedule.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techhub.schedule.model.Staff;

public interface StaffRepository extends JpaRepository<Staff, Integer> {

}
