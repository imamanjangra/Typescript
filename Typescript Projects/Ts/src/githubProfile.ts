import axios from "axios";
import type { AxiosResponse } from "axios";


const submitBtn = document.querySelector(".submit_btn") as HTMLButtonElement | null;
const usernameInput = document.querySelector("#username") as HTMLInputElement | null;

const profile = document.querySelector("#profile-container") as HTMLDivElement | null;
const avatar = document.querySelector("#avatar") as HTMLImageElement | null;
const nameEl = document.querySelector("#name") as HTMLHeadingElement | null;
const bioEl = document.querySelector("#bio") as HTMLParagraphElement | null;
const followersEl = document.querySelector("#followers") as HTMLSpanElement | null;
const followingEl = document.querySelector("#following") as HTMLSpanElement | null;
const reposEl = document.querySelector("#repos") as HTMLUListElement | null;


interface GithubUser {
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  repos_url: string;
}

interface GithubRepo {
  name: string;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}


submitBtn?.addEventListener("click", inputUsername);

usernameInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputUsername();
  }
});


function inputUsername() {
  const username = usernameInput?.value.trim() ?? "";

  if (!username) {
    alert("Enter your GitHub username!");
    return;
  }

  fetchUser(username);
}

// ---------------- Fetch User ----------------

async function fetchUser(username: string) {
  try {
    const response: AxiosResponse<GithubUser> = await axios.get(
      `https://api.github.com/users/${username}`
    );

    displayUser(response.data);

    profile?.classList.remove("hidden");

    fetchRepos(response.data.repos_url);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        alert("GitHub user not found.");
      } else {
        console.log(error.message);
      }
    }
  }
}


function displayUser(user: GithubUser) {
  if (nameEl) {
    nameEl.innerText = user.name ?? "No Name";
  }

  if (avatar) {
    avatar.src = user.avatar_url;
  }

  if (bioEl) {
    bioEl.innerText = user.bio ?? "No bio available";
  }

  if (followersEl) {
    followersEl.innerText = String(user.followers);
  }

  if (followingEl) {
    followingEl.innerText = String(user.following);
  }
}


async function fetchRepos(url: string) {
  try {
    const response = await axios.get<GithubRepo[]>(url);

    displayRepos(response.data);
  } catch (error) {
    console.log(error);
  }
}


function displayRepos(repoData: GithubRepo[]) {
  if (!reposEl) return;

  reposEl.innerHTML = "";

  const topThree = repoData
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    )
    .slice(0, 3);

  topThree.forEach((repo) => {
    const li = document.createElement("li");

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    const link = document.createElement("a");
    link.href = repo.html_url;
    link.target = "_blank";
    link.innerText = repo.name;

    const info = document.createElement("span");
    info.innerText =
      `⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count} | ${repo.language ?? "Unknown"}`;

    li.append(link);
    li.append(info);

    reposEl.append(li);
  });
}