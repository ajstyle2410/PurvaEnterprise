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

public class Staff {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int StaffId;
    private String StaffName;
    private String StaffRole;
    private long StaffContact;
	private String StaffEmail;
	private long StaffPassword;
	private long StaffReapetPassword;

    
}
