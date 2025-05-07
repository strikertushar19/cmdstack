// File: src/data/frameworks.ts (continued)
import React from "react";
import { ReactNode } from "react";

export interface Command {
  title: string;
  command: string;
  description: string;
  options?: string[];
}

export interface Framework {
  id: string;
  REQUIRED?: string[];
  name: string;
  icon: ReactNode;
  Link?: string;
  commands: Command[];
}

export const frameworks: Framework[] = [
  {
    id: "nextjs",
    name: "Next.js",

    REQUIRED: ["node", "npm"],
    Link: "https://nodejs.org/en/download",
    icon: (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
      >
        <g transform="translate(.722 .64) scale(6.375)">
          <circle cx="40" cy="40" r="40" />
          <path
            d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z"
            fill="url(#prefix___Linear1)"
            fill-rule="nonzero"
          />
          <path fill="url(#prefix___Linear2)" d="M51.111 24h5.333v32h-5.333z" />
        </g>
        <defs>
          <linearGradient
            id="prefix___Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="prefix___Linear2"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    commands: [
      {
        title: "Create Next.js App",
        command: "npx create-next-app@latest my-app",
        description:
          "Create a new Next.js application with the default template",
      },
      {
        title: "Development Server",
        command: "npm run dev",
        description: "Start the development server on http://localhost:3000",
      },
      {
        title: "Build Application",
        command: "npm run build",
        description: "Build the application for production",
      },
      {
        title: "Start Production Server",
        command: "npm run start",
        description: "Start the application in production mode",
      },
      {
        title: "Install Dependency",
        command: "npm install [package-name]",
        description: "Install a package as a dependency",
      },
    ],
  },
  {
    id: "fastapi",
    name: "FastAPI",
    REQUIRED: ["python", "pip"],
    Link: "https://www.python.org/downloads/",

    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 00-2.375-.5 36.042 36.042 0 01-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563-2.875-1.172-8.172-3.91-9.984-5.156-.496-.344-.96-.621-1.031-.621-.07 0-1.23-.816-2.578-1.813-8.57-6.343-15.004-14.043-19.653-23.527-.8-1.629-1.453-3.074-1.453-3.21 0-.134-.144-.505-.32-.817-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 00-.625-1.813c-.195-.46-.352-1.02-.352-1.246 0-.227-.195-.965-.433-1.645-.238-.675-.43-1.472-.43-1.77 0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894.23-.957.418-2 .418-2.32 0-.321.145-.95.32-1.4.18-.448.41-1.253.516-1.788.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813.11-.238.539-1.21.957-2.16.676-1.535 2.125-4.43 2.972-5.945.309-.555.426-.739 2.098-3.352 2.649-4.148 7.176-9.309 11.39-12.988 1.485-1.297 6.446-5.063 6.669-5.063.062 0 .53-.281 1.043-.625 1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 001.836-.953c.285-.164.82-.41 3.567-1.64.605-.27 1.257-.516 3.136-1.173.414-.144 1.246-.449 1.84-.672.598-.222 1.301-.406 1.563-.406.258 0 .937-.18 1.508-.402.57-.223 1.605-.477 2.304-.563.696-.082 1.621-.277 2.055-.43.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 003.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 003.781.445c.953.079 2.168.278 2.703.442.535.16 1.461.36 2.055.433.594.079 1.594.325 2.222.551.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625.594.18 1.613.535 2.27.797.652.261 1.527.605 1.945.761.77.29 6.46 3.137 7.234 3.622 6.281 3.917 9.512 6.476 13.856 10.964 5.238 5.414 8.715 10.57 12.254 18.16.25.536.632 1.329.851 1.758.215.434.395.942.395 1.13 0 .19.18.76.402 1.269.602 1.383 1.117 2.957 1.36 4.16.12.59.343 1.32.495 1.621.153.3.332 1.063.403 1.688.07.624.277 1.648.453 2.269 1.02 3.531 1.527 13.934.91 18.535-.183 1.367-.39 3.02-.46 3.672-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809-1.172 2.07-5.101 7.668-5.843 8.324-.067.058-.399.45-.735.863-.336.418-1.414 1.586-2.39 2.594-4.301 4.441-7.77 7.187-13.86 10.969-.722.449-6.847 3.441-7.992 3.906-.594.238-1.586.64-2.203.89-.613.247-1.297.454-1.512.458-.215.003-.781.195-1.258.425-.476.23-1.082.422-1.351.426-.266.004-1.043.192-1.727.418-.683.23-1.633.477-2.11.55-.476.075-1.495.278-2.269.45-.773.172-3.11.508-5.187.746a59.06 59.06 0 01-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027.18-.723 29.234-58.97 29.781-59.7.461-.617.504-1.605.082-1.953-.222-.187-3.004-.246-10.43-.234-5.57.012-10.253.016-10.406.012-.226-.008-.273-3.73-.25-19.672.016-10.817-.035-19.766-.113-19.89-.078-.126-.383-.227-.68-.227-.418 0-.613.18-.87.808-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 00-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 00-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039-.41.496-.633 1.64-.402 2.07.21.394.629.41 11.043.394 5.953-.007 10.863.024 10.914.07.137.141.086 37.31-.055 38.196-.093.582-.031.89.235 1.156.46.461.586.457 1.25-.066zm0 0"
          fill="#049688"
        />
      </svg>
    ),
    commands: [
      {
        title: "Install FastAPI",
        command: "pip install fastapi",
        description: "Install FastAPI framework",
      },
      {
        title: "Install Uvicorn",
        command: "pip install uvicorn",
        description: "Install ASGI server for FastAPI",
      },
      {
        title: "Run FastAPI App",
        command: "uvicorn main:app --reload",
        description: "Run a FastAPI application with auto-reload",
      },
      {
        title: "Create Virtual Environment",
        command: "python -m venv venv",
        description: "Create a Python virtual environment",
      },
      {
        title: "Activate Environment (Windows)",
        command: "venv\\Scripts\\activate",
        description: "Activate the virtual environment on Windows",
      },
    ],
  },
  {
    id: "docker",
    name: "Docker",
    REQUIRED: ["docker engine"],
    Link: "https://docs.docker.com/get-docker/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#3A4D54"
          d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
        />
        <path
          fill="#00AADA"
          d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
        />
        <path
          fill="#28B8EB"
          d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
        />
        <path
          fill="#028BB8"
          d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
        />
        <path
          fill="#019BC6"
          d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#23C2EE"
          d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#23C2EE"
          d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#23C2EE"
          d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#00ACD3"
          d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#D4EEF1"
          d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#3A4D54"
          d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
        />
        <path
          fill="#BFDBE0"
          d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
        />
        <path
          fill="#D4EEF1"
          d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
        />
      </svg>
    ),
    commands: [
      {
        title: "Docker Version",
        command: "docker --version",
        description: "Display Docker version information",
      },
      {
        title: "List Containers",
        command: "docker ps",
        description: "List running containers",
      },
      {
        title: "Run Container",
        command: "docker run [OPTIONS] IMAGE [COMMAND]",
        description: "Run a command in a new container",
      },
      {
        title: "Stop Container",
        command: "docker stop CONTAINER_ID",
        description: "Stop a running container",
      },
      {
        title: "Build Image",
        command: "docker build -t name:tag .",
        description: "Build an image from a Dockerfile",
      },
    ],
  },
  {
    id: "git",
    name: "Git",
    REQUIRED: ["git"],
    Link: "https://git-scm.com/downloads",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill="#F34F29"
          d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
        />
      </svg>
    ),
    commands: [
      {
        title: "Initialize Repository",
        command: "git init",
        description: "Create an empty Git repository",
      },
      {
        title: "Clone Repository",
        command: "git clone [repository_url]",
        description: "Clone a repository into a new directory",
      },
      {
        title: "Add Files",
        command: "git add [file]",
        description: "Add file contents to the index",
      },
      {
        title: "Commit Changes",
        command: 'git commit -m "message"',
        description: "Record changes to the repository",
      },
    ],
  },
  {
    id: "vue",
    name: "Vue.js",
    REQUIRED: ["node", "npm"],
    Link: "https://nodejs.org/en/download",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <polygon
          fill="#81c784"
          points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
        ></polygon>
        <polygon
          fill="#455a64"
          points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
        ></polygon>
      </svg>
    ),
    commands: [
      {
        title: "Install Vue CLI",
        command: "npm install -g @vue/cli",
        description: "Install Vue CLI globally",
      },
      {
        title: "Create Vue App",
        command: "vue create my-app",
        description: "Create a new Vue.js application",
      },
      {
        title: "Start Development Server",
        command: "npm run serve",
        description: "Start the development server",
      },
      {
        title: "Build Application",
        command: "npm run build",
        description: "Build the application for production",
      },
    ],
  },
  {
    id: "angular",
    name: "Angular",
    REQUIRED: ["node", "npm"],
    Link: "https://nodejs.org/en/download",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
      >
        <path
          fill="#bdbdbd"
          d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"
        ></path>
        <path
          fill="#b71c1c"
          d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"
        ></path>
        <path
          fill="#dd2c00"
          d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"
        ></path>
        <path
          fill="#bdbdbd"
          d="M24 5.996L24 15.504 32.578 34 36.987 34z"
        ></path>
        <path fill="#eee" d="M11.013 34L15.422 34 24 15.504 24 5.996z"></path>
        <path fill="#bdbdbd" d="M24 24H30V28H24z"></path>
        <path fill="#eee" d="M18 24H24V28H18z"></path>
      </svg>
    ),
    commands: [
      {
        title: "Install Angular CLI",
        command: "npm install -g @angular/cli",
        description: "Install Angular CLI globally",
      },
      {
        title: "Create Angular App",
        command: "ng new my-app",
        description: "Create a new Angular application",
      },
      {
        title: "Start Development Server",
        command: "ng serve",
        description: "Start the development server",
      },
      {
        title: "Build Application",
        command: "ng build",
        description: "Build the application for production",
      },
    ],
  },
  {
    id: "django",
    name: "Django",
    REQUIRED: ["python", "pip"],
    Link: "https://www.python.org/downloads/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
      >
        <path d="M 11 3 L 11 8.1582031 C 10.653 8.0172031 9.9041562 8 9.5351562 8 C 6.7591563 8 4.1894531 9.306 4.1894531 13 C 4.1894531 17.42 7.67 18 10 18 C 10.92 18 13 17.909141 14 17.619141 L 14 3 L 11 3 z M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 16 8 L 16 16.701172 C 16 18.217172 15.078 19.795172 13 20.701172 L 15.859375 21.996094 C 18.765375 20.996094 19 17.701172 19 16.701172 L 19 8 L 16 8 z M 9.9707031 10.550781 C 10.290703 10.550781 10.65 10.609453 11 10.689453 L 11 15.392578 C 10.65 15.472578 10.290703 15.533203 9.9707031 15.533203 C 8.6607031 15.533203 7.390625 15.12 7.390625 13 C 7.390625 10.88 8.6607031 10.550781 9.9707031 10.550781 z"></path>
      </svg>
    ),
    commands: [
      {
        title: "Install Django",
        command: "pip install django",
        description: "Install Django framework",
      },
      {
        title: "Create Django Project",
        command: "django-admin startproject myproject",
        description: "Create a new Django project",
      },
      {
        title: "Run Development Server",
        command: "python manage.py runserver",
        description: "Start the development server",
      },
      {
        title: "Create App",
        command: "python manage.py startapp myapp",
        description: "Create a new Django app",
      },
    ],
  },
  {
    id: "flask",
    name: "Flask",
    REQUIRED: ["python", "pip"],
    Link: "https://www.python.org/downloads/",
    icon: (
      <img
        src="https://flask.palletsprojects.com/en/stable/_images/flask-horizontal.png"
        alt="Flask logo"
      />
    ),
    commands: [
      {
        title: "Install Flask",
        command: "pip install flask",
        description: "Install Flask framework",
      },
      {
        title: "Run Flask App",
        command: "flask run",
        description: "Run the Flask application",
      },
      {
        title: "Set Environment Variable",
        command: "export FLASK_APP=app.py",
        description: "Set the Flask application entry point",
      },
    ],
  },
  {
    id: "laravel",
    name: "Laravel",
    REQUIRED: ["php", "composer"],
    Link: "https://getcomposer.org/download/",
    icon: (
      <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel logo" />
    ),
    commands: [
      {
        title: "Install Laravel",
        command: "composer global require laravel/installer",
        description: "Install Laravel installer globally",
      },
      {
        title: "Create Laravel Project",
        command: "laravel new myproject",
        description: "Create a new Laravel project",
      },
      {
        title: "Run Development Server",
        command: "php artisan serve",
        description: "Start the development server",
      },
    ],
  },
];
