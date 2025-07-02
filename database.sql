-- جدول الخدمات (Services)
CREATE TABLE Services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    icon VARCHAR(255)
);

-- جدول العروض (Offers)
CREATE TABLE Offers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image VARCHAR(255)
);

-- جدول الصور (Gallery)
CREATE TABLE GalleryImages (
    id SERIAL PRIMARY KEY,
    imageUrl VARCHAR(255)
);

-- جدول من نحن (About)
CREATE TABLE About (
    id SERIAL PRIMARY KEY,
    text TEXT
);

-- جدول المشرفين (Admins)
CREATE TABLE Admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

