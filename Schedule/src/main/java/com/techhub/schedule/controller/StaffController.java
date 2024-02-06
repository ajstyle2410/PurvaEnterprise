package com.techhub.schedule.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.techhub.schedule.model.Staff;
import com.techhub.schedule.service.StaffService;
@RestController
@CrossOrigin
public class StaffController {

	@Autowired
	StaffService staffService;

	@GetMapping("staffrecords")
	public List<Staff> getStaffRecords() {
		List<Staff> list = new ArrayList<Staff>();
		list = staffService.addStaffRecords();
		if (!list.isEmpty()) {
			//System.out.println(list.toString());
			//return new ResponseEntity<Staff>(HttpStatus.OK);
		}
		//return new ResponseEntity<Staff>( (Staff) list, HttpStatus.NOT_FOUND);
	  return list;
	}	
	
	@PostMapping("/addStaffRecords")
	public ResponseEntity<String> staffRecords(@RequestBody Staff staff) {
	    if (staff.getStaffName() == null) {
	        return ResponseEntity.badRequest().body("Staff name cannot be null");
	    }
	    staffService.addStaffRecords(staff);
	    return ResponseEntity.ok("Staff created successfully");
	}
	@DeleteMapping("/deletestaff/{staffid}")
	 public ResponseEntity<String> deleteStaff(@PathVariable("staffid") int StaffId)
	 {
		System.out.println("-------------------> "+StaffId);
		boolean b = staffService.deleteStaffRecords(StaffId);
	
		 if(b)
			 return  ResponseEntity.ok("Staff deleted...");
		 else
			 return  ResponseEntity.ok("Staff not  deleted...");
		
	 }
}
