-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2024 at 03:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vehicle_booking_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `firstName` varchar(400) NOT NULL,
  `lastName` varchar(400) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `wheels` int(11) NOT NULL,
  `vehicleTypes` varchar(400) NOT NULL,
  `model` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `userId`, `vehicleId`, `firstName`, `lastName`, `startDate`, `endDate`, `createdAt`, `updatedAt`, `wheels`, `vehicleTypes`, `model`) VALUES
(1, 0, 0, 'Pooja', 'Dhamanekar', '2024-11-24', '2024-11-29', '2024-11-11 14:27:11', '2024-11-11 14:27:11', 2, '', 'Model B');

--
-- Triggers `bookings`
--
DELIMITER $$
CREATE TRIGGER `after_insert_booking` BEFORE INSERT ON `bookings` FOR EACH ROW BEGIN
  -- Check if NEW.id is valid before assigning to NEW.userId
  IF NEW.id IS NOT NULL THEN
    SET NEW.userId = NEW.id;
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `before_insert_booking` BEFORE INSERT ON `bookings` FOR EACH ROW BEGIN
  SET NEW.userId = NEW.id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int(100) NOT NULL,
  `model` varchar(400) NOT NULL,
  `vehicleTypeId` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `model`, `vehicleTypeId`, `available`, `createdAt`, `updatedAt`, `name`) VALUES
(1, 'Model A', 1, 1, '2024-11-09 00:00:00', '2024-11-09 00:00:00', NULL),
(2, 'Model B', 2, 1, '2024-11-09 00:00:00', '2024-11-09 00:00:00', NULL),
(3, 'Model C', 3, 1, '2024-11-09 00:00:00', '2024-11-09 00:00:00', NULL),
(4, 'Model X', 4, 1, '2024-11-09 00:00:00', '2024-11-09 00:00:00', NULL),
(5, 'Model Y', 5, 1, '2024-11-09 00:00:00', '2024-11-09 00:00:00', NULL),
(6, 'Model A', 1, 1, '2024-11-09 11:27:31', '2024-11-09 11:27:31', NULL),
(7, 'Model B', 2, 1, '2024-11-09 11:27:31', '2024-11-09 11:27:31', NULL),
(8, 'Model C', 3, 1, '2024-11-09 11:27:31', '2024-11-09 11:27:31', NULL),
(9, 'Model X', 4, 1, '2024-11-09 11:27:31', '2024-11-09 11:27:31', NULL),
(10, 'Model Y', 5, 1, '2024-11-09 11:27:31', '2024-11-09 11:27:31', NULL),
(11, 'Model A', 1, 1, '2024-11-09 12:16:03', '2024-11-09 12:16:03', NULL),
(12, 'Model B', 2, 1, '2024-11-09 12:16:03', '2024-11-09 12:16:03', NULL),
(13, 'Model C', 3, 1, '2024-11-09 12:16:03', '2024-11-09 12:16:03', NULL),
(14, 'Model X', 4, 1, '2024-11-09 12:16:03', '2024-11-09 12:16:03', NULL),
(15, 'Model Y', 5, 1, '2024-11-09 12:16:03', '2024-11-09 12:16:03', NULL),
(16, 'Model A', 1, 1, '2024-11-09 12:35:12', '2024-11-09 12:35:12', NULL),
(17, 'Model B', 2, 1, '2024-11-09 12:35:12', '2024-11-09 12:35:12', NULL),
(18, 'Model C', 3, 1, '2024-11-09 12:35:12', '2024-11-09 12:35:12', NULL),
(19, 'Model X', 4, 1, '2024-11-09 12:35:12', '2024-11-09 12:35:12', NULL),
(20, 'Model Y', 5, 1, '2024-11-09 12:35:12', '2024-11-09 12:35:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vehicletypes`
--

CREATE TABLE `vehicletypes` (
  `id` int(100) NOT NULL,
  `name` varchar(400) NOT NULL,
  `numberOfWheels` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicletypes`
--

INSERT INTO `vehicletypes` (`id`, `name`, `numberOfWheels`, `createdAt`, `updatedAt`) VALUES
(1, 'Hatchback', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(2, 'SUV', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(3, 'Sedan', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(4, 'Cruiser', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(5, 'Sports', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(6, 'Hatchback', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(7, 'SUV', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(8, 'Sedan', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(9, 'Cruiser', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(10, 'Sports', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(11, 'Hatchback', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(12, 'SUV', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(13, 'Sedan', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(14, 'Cruiser', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(15, 'Sports', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(16, 'Hatchback', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(17, 'SUV', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(18, 'Sedan', 4, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(19, 'Cruiser', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(20, 'Sports', 2, '2024-11-09 12:15:39', '2024-11-09 12:15:39'),
(21, 'Hatchback', 4, '2024-11-09 12:16:03', '2024-11-09 12:16:03'),
(22, 'SUV', 4, '2024-11-09 12:16:03', '2024-11-09 12:16:03'),
(23, 'Sedan', 4, '2024-11-09 12:16:03', '2024-11-09 12:16:03'),
(24, 'Cruiser', 2, '2024-11-09 12:16:03', '2024-11-09 12:16:03'),
(25, 'Sports', 2, '2024-11-09 12:16:03', '2024-11-09 12:16:03'),
(26, 'Hatchback', 4, '2024-11-09 12:35:12', '2024-11-09 12:35:12'),
(27, 'SUV', 4, '2024-11-09 12:35:12', '2024-11-09 12:35:12'),
(28, 'Sedan', 4, '2024-11-09 12:35:12', '2024-11-09 12:35:12'),
(29, 'Cruiser', 2, '2024-11-09 12:35:12', '2024-11-09 12:35:12'),
(30, 'Sports', 2, '2024-11-09 12:35:12', '2024-11-09 12:35:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicletypes`
--
ALTER TABLE `vehicletypes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vehicletypes`
--
ALTER TABLE `vehicletypes`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
