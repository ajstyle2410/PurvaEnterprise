package com.techhub.schedule.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techhub.schedule.model.SchedulePage;

public interface ScheduleRepository extends JpaRepository<SchedulePage, Integer> {

}
