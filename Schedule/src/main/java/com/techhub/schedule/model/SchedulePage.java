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
     private int ScheduleId;
 	@Column(nullable = false)
	private String StaffName;
 	@Column(nullable = false)
 	private int StaffId;
 	@Column(nullable = false)
	   private String FirstSchedule;
 	@Column(nullable = false)
 	private String SecondSchedule;
 	@Column(nullable = false)
 	private String ThridSchedule;
 	@Column(nullable = false)
 	 private String FourthSchedule;
 	@Column(nullable = false)
 	 private String FifthSchedule;
 	@Column(nullable = false)
 	 private String SixthSchedule;
 	@Column(nullable = false)
 	 private String ExtraSchedule;
 	@Column(nullable = false)
 	private String TodayDate;
}
