package com.ssafy.togeball.domain.matching.repository;

import com.ssafy.togeball.domain.matching.dto.MatchingCreateDto;
import com.ssafy.togeball.domain.matching.entity.Matching;

public interface CustomMatchingRepository {

    Matching createMatchingAndChatroom(MatchingCreateDto matchingDto);
}
