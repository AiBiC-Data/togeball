package com.ssafy.togeball.domain.league.service;

import com.ssafy.togeball.domain.league.dto.ClubResponse;
import com.ssafy.togeball.domain.league.dto.GameResponse;
import com.ssafy.togeball.domain.league.entity.Club;
import com.ssafy.togeball.domain.league.entity.Game;
import com.ssafy.togeball.domain.league.repository.ClubRepository;
import com.ssafy.togeball.domain.league.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LeagueService {

    private final ClubRepository clubRepository;
    private final GameRepository gameRepository;

//    @Override
//    public List<Integer> findAll() {
//        return gameRepository.findAll().stream().map(g -> g.getId()).toList();
//    }

    public List<GameResponse> findBySponsorName(String sponsorName) {
        List<Game> games = gameRepository.findBySponsorName(sponsorName);
        return games.stream()
                .map(GameResponse::of)
                .toList();
    }

    public List<GameResponse> findByDate(Date startDate, Date endDate) {
        List<Game> games = gameRepository.findByDate(startDate, endDate);
        return games.stream()
                .map(GameResponse::of)
                .toList();
    }

    public List<GameResponse> findBySponsorNameAndDate(Date date, String sponsorName) {
        List<Game> games = gameRepository.findBySponsorNameAndDate(date, sponsorName);
        return games.stream()
                .map(GameResponse::of)
                .toList();
    }

    public List<ClubResponse> sortByRanking() {
        List<Club> clubs = clubRepository.findAllByOrderByRankingAsc();
        return clubs.stream()
                .map(ClubResponse::of)
                .toList();
    }
}
