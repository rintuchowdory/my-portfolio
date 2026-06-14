# 🐳 .docker — Personal Dev Environment

A ready-to-go containerised development environment with everything I use daily, reproducible on any machine.

---

## 📦 What's inside

| Category | Tool / Version |
|---|---|
| **OS** | Ubuntu 24.04 |
| **Shell** | Bash (custom prompt + aliases) |
| **Runtime** | Node.js LTS + Python 3 |
| **Package managers** | npm, pip |
| **VCS** | git + GitHub CLI (`gh`) |
| **HTTP** | curl, wget |
| **JSON** | jq |
| **JS tools** | nodemon, typescript, ts-node, prettier |
| **Python tools** | ipython, black, ruff, httpx, requests |

---

## 🚀 Quick start

### Pull from Docker Hub
```bash
docker pull <your-dockerhub-username>/dev-env:latest
docker run -it --rm \
  -v $(pwd):/home/dev/workspace \
  <your-dockerhub-username>/dev-env:latest
```

### Build locally
```bash
git clone https://github.com/<your-username>/.docker.git
cd .docker
docker build -t dev-env .
docker run -it --rm -v $(pwd):/home/dev/workspace dev-env
```

---

## 🛠️ Included aliases

| Alias | Command |
|---|---|
| `ll` | `ls -lah --color=auto` |
| `gs` | `git status` |
| `gl` | `git log --oneline --graph --all` |
| `py` | `python3` |
| `ipy` | `ipython` |

---

## 🔄 Pushing a new version to Docker Hub

```bash
# Build & tag
docker build -t <your-dockerhub-username>/dev-env:latest .

# (Optional) also tag with a version
docker tag <your-dockerhub-username>/dev-env:latest <your-dockerhub-username>/dev-env:1.0.0

# Login & push
docker login
docker push <your-dockerhub-username>/dev-env:latest
docker push <your-dockerhub-username>/dev-env:1.0.0
```

---

## 📁 Project structure

```
.docker/
├── Dockerfile      ← the image definition
└── README.md       ← you are here
```

---

## 💡 Tips

- Mount your local project folder with `-v $(pwd):/home/dev/workspace` so changes are reflected immediately.
- Add a `.bashrc` or `.gitconfig` volume mount to bring your personal configs:
  ```bash
  docker run -it --rm \
    -v $(pwd):/home/dev/workspace \
    -v ~/.gitconfig:/home/dev/.gitconfig:ro \
    dev-env
  ```
- Extend the image for project-specific needs by using it as a base:
  ```dockerfile
  FROM <your-dockerhub-username>/dev-env:latest
  RUN npm install -g @angular/cli
  ```
# CI/CD enabled
