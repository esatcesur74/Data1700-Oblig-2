package com.example.test;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class KinoController {
    private ArrayList<KinoBilletter> kinobilletter = new ArrayList<>();

    @GetMapping("/hentListe")
    public ArrayList<KinoBilletter> hentListe() {
        return kinobilletter;
    }

    @PostMapping("/leggeTil")
    public void settInn(@RequestBody KinoBilletter kinoBillett) {
        kinobilletter.add(kinoBillett);
    }

    @PostMapping("/slett")
    public void slett() {
        kinobilletter.clear();
    }
}
