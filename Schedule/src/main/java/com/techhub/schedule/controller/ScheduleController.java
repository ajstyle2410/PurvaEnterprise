package com.techhub.schedule.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.techhub.schedule.model.SchedulePage;
import com.techhub.schedule.service.StaffService;

@RestController
@CrossOrigin
public class ScheduleController {
	
	@Autowired
	StaffService service;
	@PostMapping("schedulerecords")
	 public  ResponseEntity<String> getScheduleRecords(@RequestBody SchedulePage schedulePage)
	 {
		System.out.println("---> "+schedulePage.toString());
		  try {
			   service.addScheduleRecords(schedulePage);
				return ResponseEntity.accepted().body("Schedule Records are stored....");
		  }catch(Exception ex)
		  {
			  return ResponseEntity.badRequest().body("schedule REcords not stored.....");
		  }
	 }
	
	@GetMapping("fetchschedulerecords")
	 public List<SchedulePage> fetchScheduleRecords()
	 {
		return  service.fetchScheduleDetails();
	 }
	
	
}
