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

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Subject{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int SubjectId;
	@Column(nullable = false)
	 private String  SubjectName;
}
