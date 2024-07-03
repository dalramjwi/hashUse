window.addEventListener("hashchange", function () {
  // 모든 탭 컨텐츠를 숨긴다.
  document.querySelectorAll(".tab-content").forEach(function (tab) {
    tab.classList.remove("active");
  });

  // 현재 hash 값을 가져와서 해당 탭 컨텐츠를 보여준다.
  const hash = window.location.hash;
  if (hash) {
    const activeTab = document.querySelector(hash);
    if (activeTab) {
      activeTab.classList.add("active");
    }
  }
});

// 초기 로드 시 현재 hash 값을 기준으로 탭 설정
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    const hash = window.location.hash;
    const activeTab = document.querySelector(hash);
    if (activeTab) {
      activeTab.classList.add("active");
    }
  }
});
