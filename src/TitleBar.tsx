import { useState } from "react";
import "./TitleBar.css";

function TitleBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="titlebar">
      <div className="titlebar-drag-region" data-tauri-drag-region />

      {/* macOS 信号ボタン分のスペース */}
      <div className="titlebar-traffic-light-spacer" />

      <div className="titlebar-nav">
        <button className="titlebar-icon-button" title="Back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 1L4 8l7 7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="titlebar-icon-button" title="Forward">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 1l7 7-7 7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="titlebar-search">
        <svg className="titlebar-search-icon" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04Z"/>
        </svg>
        <input
          className="titlebar-search-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <kbd className="titlebar-search-kbd">⌘K</kbd>
      </div>
    </div>
  );
}

export default TitleBar;
