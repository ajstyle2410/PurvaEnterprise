package com.techhub.schedule.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.techhub.schedule.model.Subject;
import com.techhub.schedule.service.StaffService;

@CrossOrigin
@RestController
public class SubjectController {
	
	@Autowired
	 StaffService service;
	
	 @PostMapping("addsubject")
	  public Subject  addSubjectRecords(@RequestBody Subject subject)
	  {
		   System.out.println(subject.toString());
		   
		  return    service.addSubjectRecords(subject);
	  }
	 
	 @GetMapping("subjectlist")
	  public List<Subject> subjectList()
	  {
		return  service.subjectAllRecords();
		 
	  }
	 
	 @DeleteMapping("deletesubject/{subjectid}")
	  public  ResponseEntity<String > deleteSubjectRecords(@PathVariable("subjectid") int subjectid)
	  {
		boolean b = service.deleteSubjectRecords(subjectid);
		   if(b)
			   return ResponseEntity.accepted().body("Id  "+subjectid+"  is data deleted successfully.....");
		   else
			   return ResponseEntity.badRequest().body(" Id "+subjectid+" is not found ");
	  }
	 
}
