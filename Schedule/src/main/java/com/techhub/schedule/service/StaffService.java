package com.techhub.schedule.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.techhub.schedule.model.ClassRoom;
import com.techhub.schedule.model.Staff;
import com.techhub.schedule.model.Subject;
import com.techhub.schedule.repository.ClassRoomRepository;
import com.techhub.schedule.repository.StaffRepository;
import com.techhub.schedule.repository.SubjectRepository;

@Service
public class StaffService {
	@Autowired
	StaffRepository staffRepository;

	@Autowired
	ClassRoomRepository classRoomRepository;

	@Autowired
	SubjectRepository subjectRepository;

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
		} catch (Exception ex) {
			System.out.println(ex);
			return false;
		}

	}

	public List<ClassRoom> showClassRecords() {

		return classRoomRepository.findAll();
	}

	public ClassRoom addClassRoomRecords(ClassRoom classRoom) {
		return classRoomRepository.save(classRoom);
	}

	public void deleteClassRoomRecords(int deleterecordsbyId) {

		classRoomRepository.deleteById(deleterecordsbyId);

	}

	public Subject addSubjectRecords(Subject subject) {

		return subjectRepository.save(subject);
	}

	public List<Subject> subjectAllRecords() {
		return  subjectRepository.findAll();
	}

	public boolean  deleteSubjectRecords(int subjectid) {
        
		  try {
		 subjectRepository.deleteById(subjectid);
		 return true;
		  }catch(Exception ex)
		  {
			  return false;
		  }
		  }

}
