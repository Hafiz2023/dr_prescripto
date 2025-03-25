prescripto-clone/
│── backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── main.py          # FastAPI main file
│   │   ├── models.py        # Database models
│   │   ├── schemas.py       # Pydantic schemas
│   │   ├── database.py      # Database connection
│   │   ├── routes/
│   │   │   ├── auth.py      # Authentication APIs
│   │   │   ├── prescriptions.py  # Prescription APIs
│   │   │   ├── orders.py    # Order APIs
│   │   ├── services/        # Business logic services
│   ├── requirements.txt     # Dependencies
│   ├── Dockerfile           # Dockerfile for deployment
│
│── frontend/                # Next.js Frontend
│   ├── components/          # Reusable UI components
│   ├── pages/
│   │   ├── index.tsx        # Home page
│   │   ├── prescriptions.tsx  # Prescription listing
│   │   ├── prescription/[id].tsx # Single prescription page
│   │   ├── cart.tsx         # Shopping cart
│   │   ├── checkout.tsx     # Checkout page
│   │   ├── auth/            # Login/Register pages
│   ├── store/               # State management (Zustand/Redux)
│   ├── styles/              # Global styles
│   ├── next.config.js       # Next.js Config
│   ├── tsconfig.json        # TypeScript Config
│
│── README.md                # Project Documentation
│── .gitignore               # Git Ignore File
