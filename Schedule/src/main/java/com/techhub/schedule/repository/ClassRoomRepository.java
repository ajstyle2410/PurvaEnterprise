package com.techhub.schedule.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techhub.schedule.model.ClassRoom;

public interface  ClassRoomRepository extends JpaRepository<ClassRoom, Integer> {

}
