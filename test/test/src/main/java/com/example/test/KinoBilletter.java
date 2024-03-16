package com.example.test;

public class KinoBilletter {
    private String film;
    private String antall;
    private String fname;
    private String etternavn;
    private String telefonnr;
    private String email;

    public KinoBilletter(String film, String antall, String fname, String etternavn, String telefonnr, String email) {
        this.film = film;
        this.antall = antall;
        this.fname = fname;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.email = email;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}