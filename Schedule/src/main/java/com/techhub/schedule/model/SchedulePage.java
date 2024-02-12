package com.techhub.schedule.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
public class SchedulePage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
 	@Column(nullable = false)
     private int ScheduleId;
	 private String StaffName;
 	 private int StaffId;
   	 private String FirstSchedule;
 	 private String SecondSchedule;
 	 private String ThridSchedule;
 	 private String FourthSchedule;
 	 private String FifthSchedule;
 	 private String SixthSchedule;
 	 private String ExtraSchedule;
 	 private String TodayDate;
}
