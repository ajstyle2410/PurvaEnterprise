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

import com.techhub.schedule.model.ClassRoom;
import com.techhub.schedule.service.StaffService;

@CrossOrigin
@RestController
public class ClassController {

	@Autowired
	StaffService staffService;
	
	@GetMapping("/classroomlist")
	    public  List<ClassRoom>  getClassRooms()
	    {
		 return  staffService.showClassRecords();
	    }	    	
	
	@PostMapping("addclassroom")
	 public  ResponseEntity<String> addClassRoomRecords(@RequestBody ClassRoom classRoom)
	 {
		//  System.err.println(classRoom.toString());
		   if(classRoom.getClassRoomNo().isEmpty())
		   {
			   return  ResponseEntity.badRequest().body("data not feched from server ......");
		   }else {
			   
			    staffService.addClassRoomRecords(classRoom);
		   }
		   return ResponseEntity.accepted().body("data are feched from server.....");
	 }
	
	@DeleteMapping("deleteclass/{deleterecordsbyId}")
	 public ResponseEntity<String> deleteClassRecords(@PathVariable("deleterecordsbyId")  int deleterecordsbyId)
	 {
		//  System.out.println("Delete id is :"+deleterecordsbyId);
		 if(deleterecordsbyId>0)
		 {
			  staffService.deleteClassRoomRecords(deleterecordsbyId);
		 
		return ResponseEntity.accepted().body("Class Records are Deleted.....");
		 }
		 else
			 return ResponseEntity.badRequest().body("Classrecords are not Deleted...");
		
	 }
	
}
