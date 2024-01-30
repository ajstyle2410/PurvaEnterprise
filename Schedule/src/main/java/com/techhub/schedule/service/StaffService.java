package com.techhub.schedule.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.techhub.schedule.model.Staff;
import com.techhub.schedule.repository.StaffRepository;

@Service
public class StaffService {
	@Autowired
	StaffRepository staffRepository;

	public List<Staff> addStaffRecords() {
		return staffRepository.findAll();
	}

	public ResponseEntity<Staff> addStaffRecords(Staff staff) {
		try {
			staffRepository.save(staff);
			return new ResponseEntity<Staff>(HttpStatus.ACCEPTED);
		} catch (Exception ex) {
			return new ResponseEntity<Staff>(HttpStatus.NOT_ACCEPTABLE);

		}
	}

	public boolean deleteStaffRecords(int staffId) {

		  try {
			    staffRepository.deleteById(staffId);
			    return true;
		  }catch(Exception ex)
		  {
			  System.out.println(ex);
			  return false;
		  }
		   
	}

}
