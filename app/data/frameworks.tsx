// File: src/data/frameworks.ts (continued)
import React from 'react';
import { ReactNode } from 'react';

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
      id: 'nextjs',
      name: 'Next.js',

      REQUIRED: ["node", "npm"],
      Link: "https://nodejs.org/en/download",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
        </svg>
      ),
      commands: [
        {
          title: "Create Next.js App",
          command: "npx create-next-app@latest my-app",
          description: "Create a new Next.js application with the default template"
        },
        {
          title: "Development Server",
          command: "npm run dev",
          description: "Start the development server on http://localhost:3000"
        },
        {
          title: "Build Application",
          command: "npm run build",
          description: "Build the application for production"
        },
        {
          title: "Start Production Server",
          command: "npm run start",
          description: "Start the application in production mode"
        },
        {
          title: "Install Dependency",
          command: "npm install [package-name]",
          description: "Install a package as a dependency"
        }
      ]
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      REQUIRED: ["python", "pip"],
      Link: "https://www.python.org/downloads/",

      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
        </svg>
      ),
      commands: [
        {
          title: "Install FastAPI",
          command: "pip install fastapi",
          description: "Install FastAPI framework"
        },
        {
          title: "Install Uvicorn",
          command: "pip install uvicorn",
          description: "Install ASGI server for FastAPI"
        },
        {
          title: "Run FastAPI App",
          command: "uvicorn main:app --reload",
          description: "Run a FastAPI application with auto-reload"
        },
        {
          title: "Create Virtual Environment",
          command: "python -m venv venv",
          description: "Create a Python virtual environment"
        },
        {
          title: "Activate Environment (Windows)",
          command: "venv\\Scripts\\activate",
          description: "Activate the virtual environment on Windows"
        }
      ]
    },
    {
      id: 'docker',
      name: 'Docker',
      REQUIRED: ["docker engine"],
      Link: "https://docs.docker.com/get-docker/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185V10.892c0 .102.084.185.186.185m-2.92 0H5.52a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185V10.892c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.373 2.655-1.058.38-1.554.379-1.851.33-.021-.14-.133-.76-.202-1.333-.02-.16-.11-.617-.121-.648-.45-1.065-.855-1.275-1.071-1.356-1.025-.38-1.892.154-2.171.385-.17.12-.518.499-.65.678-.106-.02-.492-.092-.688-.146-.379-.116-.833-.322-1.305-.675-.184-.146-.435-.396-.747-.753-.098-.138-.205-.267-.32-.388-.377-.392-.936-.579-1.662-.578-.721 0-1.385.183-1.47.205l-1.185.36c-.21.064-1.219.723-1.879.214-.33.262-.79.669-1.18 1.228-.45.644-.886 1.468-1.137 2.37-.238.797-.399 1.614-.487 2.44-.08.816-.08 1.638 0 2.453.28.225.068.443.117.655.769 3.266 3.016 5.342 5.112 6.127 2.038.77 4.198.756 5.887.273 2.617-.744 5.177-2.78 6.576-6.377.043-.11.078-.223.114-.336 1.012-2.268 1.42-4.874.869-7.703.61-.26 1.485-.84 1.71-1.93.174-.77.096-1.377-.247-1.934z" />
        </svg>
      ),
      commands: [
        {
          title: "Docker Version",
          command: "docker --version",
          description: "Display Docker version information"
        },
        {
          title: "List Containers",
          command: "docker ps",
          description: "List running containers"
        },
        {
          title: "Run Container",
          command: "docker run [OPTIONS] IMAGE [COMMAND]",
          description: "Run a command in a new container"
        },
        {
          title: "Stop Container",
          command: "docker stop CONTAINER_ID",
          description: "Stop a running container"
        },
        {
          title: "Build Image",
          command: "docker build -t name:tag .",
          description: "Build an image from a Dockerfile"
        }
      ]
    },
    {
      id: 'git',
      name: 'Git',
      REQUIRED: ["git"],
      Link: "https://git-scm.com/downloads",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.72.72.72 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 2.7.45 8.988c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
        </svg>
      ),
      commands: [
        {
          title: "Initialize Repository",
          command: "git init",
          description: "Create an empty Git repository"
        },
        {
          title: "Clone Repository",
          command: "git clone [repository_url]",
          description: "Clone a repository into a new directory"
        },
        {
          title: "Add Files",
          command: "git add [file]",
          description: "Add file contents to the index"
        },
        {
          title: "Commit Changes",
          command: "git commit -m \"message\"",
          description: "Record changes to the repository"
        },
      ]
    }
]