package com.business.OnlineStore.model;

import java.util.Objects;

public class SearchMessage {
    private String searchText = "";

    public SearchMessage(String searchText) {
        this.searchText = searchText;
    }

    public SearchMessage() {
    }

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String searchText) {
        this.searchText = searchText;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SearchMessage that = (SearchMessage) o;
        return Objects.equals(searchText, that.searchText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(searchText);
    }

    @Override
    public String toString() {
        return "SearchMessage{" +
                "searchText='" + searchText + '\'' +
                '}';
    }
}
