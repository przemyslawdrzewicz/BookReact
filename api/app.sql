-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Czas generowania: 11 Paź 2019, 20:46
-- Wersja serwera: 5.7.26
-- Wersja PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `app`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `houses`
--

DROP TABLE IF EXISTS `houses`;
CREATE TABLE IF NOT EXISTS `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `people` int(11) NOT NULL,
  `dateFrom` date NOT NULL,
  `dateTo` date NOT NULL,
  `fname` text NOT NULL,
  `sname` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `houses`
--

INSERT INTO `houses` (`id`, `name`, `people`, `dateFrom`, `dateTo`, `fname`, `sname`) VALUES
(1, 'Room 1', 2, '2019-10-11', '2019-10-13', '', ''),
(2, 'Room 2', 3, '2019-10-10', '2019-10-14', '', ''),
(3, 'Room 3', 2, '2019-10-12', '2019-10-14', '', ''),
(4, 'Room 4', 1, '2019-10-30', '2019-10-31', '', ''),
(5, 'Room 5', 3, '2019-10-06', '2019-10-07', '', ''),
(6, 'Room 6', 2, '2019-10-04', '2019-10-06', '', ''),
(7, 'Room 7', 2, '2019-10-25', '2019-10-26', '', ''),
(8, 'Room 8', 1, '2019-10-14', '2019-10-16', '', ''),
(9, 'Room 9', 2, '2019-10-28', '2019-10-29', '', ''),
(34, 'Room 6', 2, '2019-10-11', '2019-10-13', 'Imie', 'Nazwisko');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
