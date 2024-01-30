package com.techhub.schedule.model;

import org.springframework.web.bind.annotation.CrossOrigin;

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

public class Staff {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int StaffId;
	@Column(nullable = false)
    private String StaffName;
	@Column(nullable = false)
    private String StaffRole;
	@Column(nullable = false)
    private long StaffContact;
	@Column(nullable = false)
	private String StaffEmail;
	@Column(nullable = false)
	private long StaffPassword;
	@Column(nullable = false)
	private long StaffReapetPassword;

    
}
