-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2026 at 08:52 AM
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
-- Database: `bankmsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblaccountdetails`
--

CREATE TABLE `tblaccountdetails` (
  `ID` int(10) NOT NULL,
  `Userid` int(5) DEFAULT NULL,
  `AddressProof` varchar(250) DEFAULT NULL,
  `APIDNumber` varchar(250) DEFAULT NULL,
  `UAProof` varchar(250) DEFAULT NULL,
  `UPCard` varchar(250) DEFAULT NULL,
  `PANNum` varchar(250) DEFAULT NULL,
  `Address` varchar(250) DEFAULT NULL,
  `DOB` varchar(250) DEFAULT NULL,
  `TermandCond` int(1) DEFAULT NULL,
  `ApplyDate` timestamp NULL DEFAULT current_timestamp(),
  `AccountNumber` int(10) DEFAULT NULL,
  `AllottedUserid` varchar(250) DEFAULT NULL,
  `Initialamount` decimal(10,0) DEFAULT NULL,
  `Remarks` varchar(250) DEFAULT NULL,
  `Status` varchar(250) DEFAULT NULL,
  `AllottedDate` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tblaccountdetails`
--

INSERT INTO `tblaccountdetails` (`ID`, `Userid`, `AddressProof`, `APIDNumber`, `UAProof`, `UPCard`, `PANNum`, `Address`, `DOB`, `TermandCond`, `ApplyDate`, `AccountNumber`, `AllottedUserid`, `Initialamount`, `Remarks`, `Status`, `AllottedDate`) VALUES
(1, 1, 'Voter ID', 'NGF343HJHJ', 'c0c373a76c948e326134e259ef25f23b1733334500.pdf', '03ee28d8bfaee9d78e0e470d294981a21733334500.jpg', 'GBHUJ211H', 'Hno 18/1 Abc Street Ghaziabad UP', '1999-02-02', 1, '2024-12-04 17:48:20', 873982407, '222199404', 10000, 'Request Approved.', 'Approved', '2025-01-12 12:10:58'),
(2, 2, 'Voter ID', 'NHS1312312', '0428d22e358813d2778bfad2598522091735368647.pdf', 'da4d5182b7681108dfdc834f53025e771735368647.png', 'JHJHJ3132h', 'A 123 Xyz Apartment Rajnagar Extension GZB 201017 ', '2004-02-03', 1, '2024-12-28 06:50:47', 571991801, '319974725', 20000, 'Account Approved', 'Approved', '2025-01-12 12:11:00'),
(3, 3, 'Adhar Card', '123123123123', '0428d22e358813d2778bfad2598522091736175678.pdf', 'da4d5182b7681108dfdc834f53025e771736175678.png', 'BNHGF3223J', 'XYZ Address', '2000-01-01', 1, '2025-01-06 15:01:18', 147569176, '400897082', 25000, 'Account Approved', 'Approved', '2025-01-07 01:14:37'),
(4, 4, 'Adhar Card', '123123123456', '0428d22e358813d2778bfad2598522091736952669.pdf', 'da4d5182b7681108dfdc834f53025e771736952669.png', 'ABCPK12345H', 'Ho no 123 XYZ Street Mayur Vihar  Delhi 110001', '2000-01-10', 1, '2025-01-15 14:51:09', 585403830, '428491850', 3000, 'Details verified', 'Approved', '2025-01-15 14:53:45'),
(5, 5, 'Adhar Card', '123443211234', '0428d22e358813d2778bfad2598522091737562247.pdf', '03ee28d8bfaee9d78e0e470d294981a21737562247.jpg', 'ABCDE1234H', 'H no 18/1 Xyz Street new Delhi 110092', '1993-02-04', 1, '2025-01-22 16:10:47', 118239573, '264602756', 5000, 'Account approved', 'Approved', '2025-01-22 16:11:28'),
(6, 7, 'Adhar Card', '440311924939', 'cfda5f1283c516349c70383501319cab1745671923.png', '8598a42b520e692a7da4e543b38f0df21745671923.png', 'SSSSS4444H', 'FGS', '1987-08-01', 1, '2025-04-26 12:52:03', 730543770, '505813525', 0, 'REJECTED , INVALID PAN NUMBER', 'Rejected', '2025-04-26 12:53:14'),
(7, 8, 'Adhar Card', '888877776666', 'cfda5f1283c516349c70383501319cab1745672695.png', '67271c5ed1c85a251a6915ecdd7e97961745672695.jpg', 'ABCDE0000G', 'TEST', '1987-08-01', 1, '2025-04-26 13:04:55', 333467790, '639372946', 10000, 'approved', 'Approved', '2025-04-26 13:05:57'),
(8, 9, '', '999999999999', '49d9975eba41be7c0980db64883f857c1746098135.pdf', '49d9975eba41be7c0980db64883f857c1746098135.pdf', 'abcdk2222g', 'sdfsdf', '1987-08-09', 1, '2025-05-01 11:15:35', 805751507, '751296355', 5000, 'approved', 'Approved', '2025-05-01 11:21:08'),
(9, 10, 'Adhar Card', '788787778777', 'ebfa61e62488b345fe7eaefb933090101746765497.pdf', 'ebfa61e62488b345fe7eaefb933090101746765497.pdf', 'agbpy4409f', 'sfdsf', '1987-08-01', 1, '2025-05-09 04:38:18', 500500211, '967291198', 10000, 'APPROVED', 'Approved', '2025-05-09 04:44:00'),
(10, 13, 'Adhar Card', '123213213213', 'b2eb48bc5bcd41985c1d9dbe9cc4db091747619561.pdf', '1ec4e516be2fcc1a4da147d5cd8c19271747619561.pdf', 'agbpy4403g', 'abc address', '1987-01-08', 1, '2025-05-19 01:52:41', 192766900, '780012663', 10000, 'approved', 'Approved', '2025-05-24 05:14:04'),
(11, 15, 'Adhar Card', '087080878981', 'c81c9401fea0e219d1b46e6a878622de1748157408.pdf', '69bfe4883623c2dc6d699e8cd21dbacf1748157408.pdf', 'abcdz2222g', 'test', '2025-10-01', 1, '2025-05-25 07:16:48', 739864969, '842108766', 5000, 'Approved', 'Approved', '2025-05-31 02:43:28'),
(12, 25, 'Adhar Card', '4198 3670 0875 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748414885.png', '5a4dcd4e2b01a35337c537b77daa9f351748414885.png', 'PHUYK4960J', 'Test Address', '1987-08-01', 1, '2025-05-28 06:48:05', 350212712, '722980625', 0, 'Rejected', 'Rejected', '2025-06-02 15:12:00'),
(13, 27, 'Adhar Card', '2079 6024 8817 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748415947.png', '5a4dcd4e2b01a35337c537b77daa9f351748415947.png', 'CCSGX6979O', 'Test Address', '1987-08-01', 1, '2025-05-28 07:05:47', 675882732, '296642332', 10000, 'test', 'Approved', '2025-06-09 07:07:10'),
(14, 28, 'Adhar Card', '4931 0747 6658 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748416404.png', '5a4dcd4e2b01a35337c537b77daa9f351748416404.png', 'CJILC4548D', 'Test Address', '1987-08-01', 1, '2025-05-28 07:13:24', 836952618, '762706062', 10000, 'Approved', 'Approved', '2025-06-10 02:56:07'),
(15, 29, 'Adhar Card', '7868 8771 9679 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748416560.png', '5a4dcd4e2b01a35337c537b77daa9f351748416560.png', 'GPOKJ3408O', 'Test Address', '1987-08-01', 1, '2025-05-28 07:16:00', 126006810, '482902933', 1000, 'test', 'Approved', '2025-06-11 05:00:32'),
(16, 30, 'Adhar Card', '0140 0936 1533 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748416647.png', '5a4dcd4e2b01a35337c537b77daa9f351748416647.png', 'IGZOJ3888D', 'Test Address', '1987-08-01', 1, '2025-05-28 07:17:27', 316249673, '568365507', 10000, 'Approved', 'Approved', '2025-06-11 06:08:06'),
(17, 31, 'Adhar Card', '6631 1869 8852 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748416734.png', '5a4dcd4e2b01a35337c537b77daa9f351748416734.png', 'FCMOO9832X', 'Test Address', '1987-08-01', 1, '2025-05-28 07:18:54', 371483716, '822739781', 10000, 'sdfd', 'Approved', '2025-06-12 01:26:55'),
(18, 32, 'Adhar Card', '9371 2812 7080 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748417110.png', '5a4dcd4e2b01a35337c537b77daa9f351748417110.png', 'AHPQC7091H', 'Test Address', '1987-08-01', 1, '2025-05-28 07:25:10', 296581753, '818624063', 10000, 'Approved', 'Approved', '2025-06-12 01:07:07'),
(19, 33, 'Adhar Card', '9409 8911 6989 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748417297.png', '5a4dcd4e2b01a35337c537b77daa9f351748417297.png', 'OWODP6296U', 'Test Address', '1987-08-01', 1, '2025-05-28 07:28:17', 477066539, '201254476', 10000, 'Approved', 'Approved', '2025-06-12 01:12:42'),
(20, 34, 'Adhar Card', '1249 2427 1813 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748417707.png', '5a4dcd4e2b01a35337c537b77daa9f351748417707.png', 'MCNCG2827T', 'Test Address', '1987-08-01', 1, '2025-05-28 07:35:07', 411061791, '321297964', 10000, 'Approved', 'Approved', '2025-06-12 01:25:29'),
(21, 35, 'Adhar Card', '1798 2328 5557 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748417851.png', '5a4dcd4e2b01a35337c537b77daa9f351748417851.png', 'LXJDB0600V', 'Test Address', '1987-08-01', 1, '2025-05-28 07:37:31', 206598074, '477878592', 0, 'Reject', 'Rejected', '2025-06-01 03:47:14'),
(22, 36, 'Adhar Card', '5852 3121 1237 ', '4712fc52ae22dd9a0aa8cb3adfec1d001748417919.png', '5a4dcd4e2b01a35337c537b77daa9f351748417919.png', 'CXGCZ4893Y', 'Test Address', '1987-08-01', 1, '2025-05-28 07:38:39', 278954671, '328979906', 10000, 'Approved', 'Approved', '2025-06-12 01:39:47'),
(23, 38, 'Adhar Card', '1234 4567 4567', '8650c5458e14cca70fea9270872beb071748748691.jpg', '390b1ada31c552f36442c0adc69a7f261748748691.png', 'abcdk2223g', 'testadree', '1987-08-01', 1, '2025-06-01 03:31:31', 192453694, '490631910', 10000, 'Approved', 'Approved', '2025-06-01 03:34:15'),
(24, 41, 'Adhar Card', '1234 9898 9899', '1a8f685c15feef92820538fea13ff2311748876481.png', '714ecf5c616f9ee7d327639e22d0725d1748876481.jpg', 'dsfds8787h', 'dfdsf', '1987-01-08', 1, '2025-06-02 15:01:21', 992016510, '666610976', 10000, 'approved', 'Approved', '2025-06-02 15:02:44'),
(25, 45, 'Adhar Card', '4214 1234 1212', '2c3288bdc9a2b332ffedb36e1bcc26831749187658.png', '8598a42b520e692a7da4e543b38f0df21749187658.png', 'abcd5555g', 'Test adress', '1987-01-08', 1, '2025-06-06 05:27:38', 365770835, '403022412', 10000, 'All details verified and approving the user', 'Approved', '2025-06-06 05:29:37'),
(26, 47, 'Adhar Card', '4819 2220 5680 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749266334.png', '5a4dcd4e2b01a35337c537b77daa9f351749266334.png', 'HSHPS2802Y', 'Test Address', '1987-08-01', 1, '2025-06-07 03:18:54', 574950540, '319314413', 10000, 'approved', 'Approved', '2025-06-07 03:23:22'),
(27, 48, 'Adhar Card', '3641 8179 4036 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749356617.png', '5a4dcd4e2b01a35337c537b77daa9f351749356617.png', 'LWXHB6377N', 'Test Address', '1987-08-01', 1, '2025-06-08 04:23:37', 104611122, '201188835', 10000, 'Approved', 'Approved', '2025-06-12 03:54:06'),
(28, 50, 'Adhar Card', '43232432432', '8598a42b520e692a7da4e543b38f0df21749370500.png', '8598a42b520e692a7da4e543b38f0df21749370500.png', '31132bacdg', 'tets adress', '1987-08-01', 1, '2025-06-08 08:15:00', 261161734, '496812456', 10000, 'Approved', 'Approved', '2025-06-12 04:26:00'),
(29, 51, 'Adhar Card', '9507 1992 5947 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749372614.png', '5a4dcd4e2b01a35337c537b77daa9f351749372614.png', 'SWTSR1930U', 'Test Address', '1987-08-01', 1, '2025-06-08 08:50:14', 903237310, '976281755', 1222, 'test', 'Approved', '2025-06-12 03:56:41'),
(30, 52, 'Adhar Card', '8399 2923 2167 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749372720.png', '5a4dcd4e2b01a35337c537b77daa9f351749372720.png', 'SWDYX5497F', 'Test Address', '1987-08-01', 1, '2025-06-08 08:52:00', 454352803, '409697058', 10000, 'Approved', 'Approved', '2025-06-12 04:26:52'),
(31, 53, 'Adhar Card', '3322 5439 6980 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749373212.png', '5a4dcd4e2b01a35337c537b77daa9f351749373212.png', 'DERRJ5275C', 'Test Address', '1987-08-01', 1, '2025-06-08 09:00:12', 946931180, '635528588', 10000, 'test', 'Approved', '2025-06-12 04:28:33'),
(32, 54, 'Adhar Card', '7435 0602 0399 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749380048.png', '5a4dcd4e2b01a35337c537b77daa9f351749380048.png', 'ARFIQ7691H', 'Test Address', '1987-08-01', 1, '2025-06-08 10:54:08', 531177186, '878582911', 10000, 'test', 'Approved', '2025-06-12 04:50:20'),
(33, 55, 'Adhar Card', '0614 3375 1171 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749380115.png', '5a4dcd4e2b01a35337c537b77daa9f351749380115.png', 'LMPKV3060R', 'Test Address', '1987-08-01', 1, '2025-06-08 10:55:15', 762203362, '213393221', 10000, 'Approved', 'Approved', '2025-06-12 05:12:24'),
(34, 56, 'Adhar Card', '5113 3471 3478 ', '4712fc52ae22dd9a0aa8cb3adfec1d001749707529.png', '5a4dcd4e2b01a35337c537b77daa9f351749707529.png', 'TFTFM0775O', 'Test Address', '1987-08-01', 1, '2025-06-12 05:52:09', 315781465, '869957737', 10000, 'Approved', 'Approved', '2025-06-13 02:18:43'),
(35, 57, 'Adhar Card', '0926 8075 0884 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750485566.png', '5a4dcd4e2b01a35337c537b77daa9f351750485566.png', 'HUJER6245D', 'Test Address', '1987-08-01', 1, '2025-06-21 05:59:26', 249305959, '461666507', 10000, 'Approved', 'Approved', '2025-06-22 00:54:43'),
(36, 58, 'Adhar Card', '4009 8894 5190 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750485983.png', '5a4dcd4e2b01a35337c537b77daa9f351750485983.png', 'BHQCV0484I', 'Test Address', '1987-08-01', 1, '2025-06-21 06:06:23', 457530894, '378694319', 0, 'Rejected', 'Rejected', '2025-11-19 01:59:44'),
(37, 60, 'Adhar Card', '4455 1072 3281 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750486191.png', '5a4dcd4e2b01a35337c537b77daa9f351750486191.png', 'JYCQM8778D', 'Test Address', '1987-08-01', 1, '2025-06-21 06:09:51', 241357219, '962576676', 10000, 'Account opened', 'Approved', '2025-12-19 10:49:00'),
(38, 64, 'Adhar Card', '9808 2647 7787 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750654890.png', '5a4dcd4e2b01a35337c537b77daa9f351750654890.png', 'TQOAD0252Z', 'Test Address', '1987-08-01', 1, '2025-06-23 05:01:30', 767013985, '124931631', 10000, 'Account opened', 'Approved', '2025-12-19 11:08:16'),
(39, 65, 'Adhar Card', '4559 3091 7871 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750655743.png', '5a4dcd4e2b01a35337c537b77daa9f351750655743.png', 'PTHDD9394M', 'Test Address', '1987-08-01', 1, '2025-06-23 05:15:43', 139314492, '151900641', 10000, 'Account opened', 'Approved', '2025-12-19 11:19:32'),
(40, 66, 'Adhar Card', '3976 5577 3241 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750697456.png', '5a4dcd4e2b01a35337c537b77daa9f351750697456.png', 'VTUWP2040R', 'Test Address', '1987-08-01', 1, '2025-06-23 16:50:56', 370840812, '713592031', 10000, 'Account opened', 'Approved', '2025-12-19 11:26:12'),
(41, 67, 'Adhar Card', '7780 8845 2113 ', '4712fc52ae22dd9a0aa8cb3adfec1d001750697768.png', '5a4dcd4e2b01a35337c537b77daa9f351750697768.png', 'MEPZJ8286W', 'Test Address', '1987-08-01', 1, '2025-06-23 16:56:08', 798966393, '529178231', 10000, 'Account opened', 'Approved', '2025-12-19 11:28:33'),
(42, 69, 'Adhar Card', '9870 8097 8798', 'b5106081a1ba69311c0893a6adbd78d51750791871jpeg', '6ee6d79e7665817b835f8ccb7635d4a11750791871jpeg', 'nmnm4535g', 'test adress', '1987-01-09', 1, '2025-06-24 19:04:31', 737553951, '569502309', 10000, 'Approved', 'Approved', '2025-06-24 19:06:35'),
(43, 131, 'Adhar Card', '1245 2563 7895 2589', '61459e292b656b640b58092771d40f601766035125.png', '95ae98cacd4f25b8e25e68eb339a5e4d1766035125.png', 'ABCDE1234B', 'Manikonda', '1990-12-02', 1, '2025-12-18 05:18:45', 712402800, '958793395', 10000, 'Account opened', 'Approved', '2025-12-19 09:00:16'),
(44, 140, 'Adhar Card', '1245 4586 2354 5896', '61459e292b656b640b58092771d40f601766041394.png', '95ae98cacd4f25b8e25e68eb339a5e4d1766041394.png', 'ABCDE1234F', 'Manikonda,Hyderabad', '1989-12-22', 1, '2025-12-18 07:03:14', 574875428, '138533251', 10000, 'Account opened', 'Approved', '2025-12-19 09:55:23'),
(45, 166, 'Adhar Card', '1245 4586 2354 5896', '61459e292b656b640b58092771d40f601766228690.png', '95ae98cacd4f25b8e25e68eb339a5e4d1766228690.png', 'ABCDE1234FgenerateRandomPANNumber() {     const letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";     let pan = \"\";      // First 5 letters     for (let i = 0; i < 5; i++) {       pan += letters.charAt(Math.floor(Math.random() * letters.length));     }      //', 'Manikonda,Hyderabad', '1990-12-09', 1, '2025-12-20 11:04:50', 186893261, '843264966', 10000, 'Account opened', 'Approved', '2025-12-20 11:07:26');

-- --------------------------------------------------------

--
-- Table structure for table `tbladmin`
--

CREATE TABLE `tbladmin` (
  `ID` int(10) NOT NULL,
  `AdminName` varchar(120) DEFAULT NULL,
  `UserName` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `AdminRegdate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbladmin`
--

INSERT INTO `tbladmin` (`ID`, `AdminName`, `UserName`, `MobileNumber`, `Email`, `Password`, `AdminRegdate`) VALUES
(1, 'Admin Test', 'admin', 8979555558, 'admin@gmail.com', 'e6e061838856bf47e1de730719fb2609', '2025-01-01 04:36:52');

-- --------------------------------------------------------

--
-- Table structure for table `tblcashier`
--

CREATE TABLE `tblcashier` (
  `ID` int(10) NOT NULL,
  `EmpID` varchar(250) DEFAULT NULL,
  `FirstName` varchar(250) DEFAULT NULL,
  `LastName` varchar(250) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Gender` varchar(250) DEFAULT NULL,
  `Dob` date DEFAULT NULL,
  `Address` mediumtext DEFAULT NULL,
  `Password` varchar(250) DEFAULT NULL,
  `JoiningDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tblcashier`
--

INSERT INTO `tblcashier` (`ID`, `EmpID`, `FirstName`, `LastName`, `MobileNumber`, `Email`, `Gender`, `Dob`, `Address`, `Password`, `JoiningDate`) VALUES
(3, 'cashier125', 'cashier', 'cashier', 9493486190, 'cashier@gmail.com', 'Male', '1987-08-01', '4-931 , flat number 402 , Baba Nivas, Puppalaguda , Manikonda', 'fc03acd24d4221742ff1de227033d723', '2025-04-26 12:43:32'),
(4, 'cashier', 'ramu', 'yajjuvarapu', 9879879877, 'ramu1@gmail.com', 'Male', '1987-01-08', 'test', 'edaf6ef136e32cbc4f3c8885a49497c4', '2025-06-10 02:22:03');

-- --------------------------------------------------------

--
-- Table structure for table `tblpage`
--

CREATE TABLE `tblpage` (
  `ID` int(10) NOT NULL,
  `PageType` varchar(200) DEFAULT NULL,
  `PageTitle` mediumtext DEFAULT NULL,
  `PageDescription` mediumtext DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `UpdationDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tblpage`
--

INSERT INTO `tblpage` (`ID`, `PageType`, `PageTitle`, `PageDescription`, `Email`, `MobileNumber`, `UpdationDate`) VALUES
(1, 'aboutus', 'About Us', '<div style=\"text-align: center;\"><b style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif;\"><font size=\"6\">Online Temple Management System</font></b></div><div style=\"text-align: justify;\"><span style=\"color: rgb(51, 51, 51); font-family: Raleway, sans-serif; text-align: start; background-color: rgb(251, 251, 251);\"><font size=\"4\">Offering Pujas to murtis of Ganesha, Muruga and Shiva, it was founded on the traditions of Saiva Siddhanta and known as the Palaniswami Sivan Temple. It quickly became a popular site for the ever growing populace of newly arriving Hindus, some of whom personally knew of the Sage from Sri Lanka, YogaSwami, who initiated the American Guru. grow over the years, and on traditional festival days, the small temple could hardly accomodate the crowd of devotees. In 1988, to better facilitate the Hindu community, the temple was moved to a larger site in Concord, CA. The site was chosen due to availability and the fact that it had always been a place of worship.</font></span></div><div style=\"text-align: justify;\"><font size=\"4\"><span style=\"color: rgb(51, 51, 51); font-family: Raleway, sans-serif; text-align: start; background-color: rgb(251, 251, 251);\">The Temple has brouht the priest form all of India&nbsp;</span><span style=\"background-color: rgb(251, 251, 251); color: rgb(51, 51, 51); font-family: Raleway, sans-serif; text-align: left;\">&nbsp;</span><span style=\"background-color: rgb(251, 251, 251); color: rgb(51, 51, 51); font-family: Raleway, sans-serif; text-align: left;\">to oversee the daily rituals.</span><span style=\"background-color: rgb(251, 251, 251); color: rgb(51, 51, 51); font-family: Raleway, sans-serif; text-align: left;\">The first few years have been most generally spent in maintaining the buildings and a dependable schedule of religious events.</span></font></div>', NULL, NULL, NULL),
(2, 'contactus', 'Contact Us', '890,Sector 62, Gyan Sarovar, GAIL Noida(Delhi/NCR)', 'info@phpgrukul.com', 7896541236, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblpayee`
--

CREATE TABLE `tblpayee` (
  `ID` int(11) NOT NULL,
  `Userid` int(5) DEFAULT NULL,
  `AccountNumber` int(11) DEFAULT NULL,
  `acountHolderName` varchar(200) DEFAULT NULL,
  `CreationDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tblpayee`
--

INSERT INTO `tblpayee` (`ID`, `Userid`, `AccountNumber`, `acountHolderName`, `CreationDate`) VALUES
(2, 2, 873982407, 'Rahul Kumar', '2025-01-03 01:22:59'),
(8, 38, 873982407, 'rahul', '2025-06-01 03:36:07'),
(10, 41, 192453694, 'raju', '2025-06-02 15:05:28'),
(11, 8, 118239573, 'joe', '2025-06-05 02:58:58'),
(12, 45, 873982407, 'Rahul', '2025-06-06 05:32:02'),
(13, 45, 192453694, 'nagaraju', '2025-06-06 05:34:04'),
(14, 47, 873982407, 'rahul', '2025-06-07 15:30:39'),
(15, 8, 571991801, 'Anuj kumar', '2025-08-09 10:40:35'),
(19, 8, 873982407, 'Rahul Kumar', '2026-01-21 10:59:41'),
(20, 8, 147569176, 'Manish Gupta', '2026-01-21 11:02:28'),
(21, 8, 585403830, 'Garima  Singh', '2026-01-21 11:07:58'),
(22, 8, 333467790, 'Automation User', '2026-01-21 11:09:09'),
(23, 8, 805751507, 'test test', '2026-01-21 11:38:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbltransaction`
--

CREATE TABLE `tbltransaction` (
  `ID` int(11) NOT NULL,
  `txnNumber` bigint(15) DEFAULT NULL,
  `UserID` int(5) DEFAULT NULL,
  `AccountNumber` int(11) DEFAULT NULL,
  `Amount` decimal(10,0) DEFAULT NULL,
  `TransactionType` varchar(250) DEFAULT NULL,
  `Status` varchar(250) DEFAULT NULL,
  `TransactionDate` timestamp NULL DEFAULT current_timestamp(),
  `cashierId` int(11) DEFAULT NULL,
  `userIdRT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbltransaction`
--

INSERT INTO `tbltransaction` (`ID`, `txnNumber`, `UserID`, `AccountNumber`, `Amount`, `TransactionType`, `Status`, `TransactionDate`, `cashierId`, `userIdRT`) VALUES
(1, 142563214555569, 2, 571991801, 20000, 'Initial Amount', 'C', '2025-01-03 00:50:18', NULL, 0),
(15, 830486447007906, 1, 873982407, 4500, 'Online Transfer', 'C', '2025-01-05 06:24:59', NULL, 2),
(16, 830486447007906, 2, 571991801, 4500, 'Online Transfer', 'D', '2025-01-05 06:24:59', NULL, 1),
(17, 158064006632733, 1, 873982407, 1452, 'Online Transfer', 'C', '2025-01-06 14:30:45', NULL, 2),
(18, 158064006632733, 2, 571991801, 1452, 'Online Transfer', 'D', '2025-01-06 14:30:45', NULL, 1),
(19, 158064006732733, 3, 147569176, 25000, 'Initial Amount', 'I', '2025-01-07 01:14:37', NULL, 0),
(20, 958064006632733, 3, 147569176, 35000, 'Cash', 'C', '2025-01-13 01:00:10', NULL, 0),
(21, 158064045632733, 3, 147569176, 2000, 'Cash', 'D', '2025-01-14 14:19:11', NULL, 0),
(22, 332863122842869, 3, 147569176, 50000, 'Cash', 'C', '2025-01-14 14:31:11', NULL, 0),
(23, 442863122892869, 4, 585403830, 3000, 'Initial Amount', 'I', '2025-01-15 14:53:45', NULL, 0),
(24, 405203560315877, 4, 585403830, 2000, 'DD', 'C', '2025-01-15 17:09:21', NULL, 0),
(26, 493080169140026, 4, 585403830, 20000, 'Cash', 'C', '2025-01-15 17:12:47', 1, 0),
(27, 871823887484696, 4, 585403830, 3200, 'Cash', 'D', '2025-01-15 17:18:40', 1, 0),
(29, 497963407961876, 4, 585403830, 15000, 'Cash', 'D', '2025-01-15 17:19:50', 1, 0),
(30, 499096795049277, 5, 118239573, 5000, 'Initial Amount', 'I', '2025-01-22 16:11:28', NULL, 0),
(31, 488812420636855, 1, 873982407, 2000, 'Online Transfer', 'C', '2025-01-22 16:13:54', NULL, 5),
(32, 488812420636855, 5, 118239573, 2000, 'Online Transfer', 'D', '2025-01-22 16:13:54', NULL, 1),
(33, 674627680960003, 5, 118239573, 20000, 'Cash', 'C', '2025-01-22 16:16:08', 1, 0),
(34, 335472501655383, 5, 118239573, 10000, 'Cash', 'D', '2025-01-22 16:17:00', 1, 0),
(35, 275752398717211, 7, 730543770, 0, 'Initial Amount', 'I', '2025-04-26 12:53:14', NULL, 0),
(36, 648153778293364, 8, 333467790, 10000, 'Initial Amount', 'I', '2025-04-26 13:05:57', NULL, 0),
(37, 471561000770478, 1, 873982407, 100, 'Online Transfer', 'C', '2025-04-26 13:06:59', NULL, 8),
(38, 471561000770478, 8, 333467790, 100, 'Online Transfer', 'D', '2025-04-26 13:06:59', NULL, 1),
(39, 488119991676028, 1, 873982407, 2000, 'Cash', 'C', '2025-04-26 14:22:55', 3, 0),
(40, 239855501294216, 1, 873982407, 52, 'Cash', 'D', '2025-04-26 14:23:13', 3, 0),
(41, 297232779825090, 1, 873982407, 1000, 'Online Transfer', 'C', '2025-04-27 04:36:28', NULL, 8),
(42, 297232779825090, 8, 333467790, 1000, 'Online Transfer', 'D', '2025-04-27 04:36:28', NULL, 1),
(43, 899207564993736, 9, 805751507, 5000, 'Initial Amount', 'I', '2025-05-01 11:21:08', NULL, 0),
(44, 897389368535978, 10, 500500211, 10000, 'Initial Amount', 'I', '2025-05-09 04:44:00', NULL, 0),
(45, 922342080254925, 1, 873982407, 1000, 'Online Transfer', 'C', '2025-05-09 04:58:50', NULL, 8),
(46, 922342080254925, 8, 333467790, 1000, 'Online Transfer', 'D', '2025-05-09 04:58:50', NULL, 1),
(47, 603554718265545, 13, 192766900, 10000, 'Initial Amount', 'I', '2025-05-24 05:14:04', NULL, 0),
(48, 845054233520809, 15, 739864969, 5000, 'Initial Amount', 'I', '2025-05-31 02:43:28', NULL, 0),
(49, 575340910408914, 1, 873982407, 1000, 'Online Transfer', 'C', '2025-06-01 03:06:51', NULL, 8),
(50, 575340910408914, 8, 333467790, 1000, 'Online Transfer', 'D', '2025-06-01 03:06:51', NULL, 1),
(51, 907080097478994, 38, 192453694, 10000, 'Initial Amount', 'I', '2025-06-01 03:34:15', NULL, 0),
(52, 646097377404790, 1, 873982407, 1000, 'Online Transfer', 'C', '2025-06-01 03:36:47', NULL, 38),
(53, 646097377404790, 38, 192453694, 1000, 'Online Transfer', 'D', '2025-06-01 03:36:47', NULL, 1),
(54, 641075833976654, 1, 873982407, 5000, 'Cash', 'C', '2025-06-01 03:42:02', 2, 0),
(55, 861610890479987, 1, 873982407, 500, 'Cash', 'D', '2025-06-01 03:42:31', 2, 0),
(56, 382064186430784, 35, 206598074, 0, 'Initial Amount', 'I', '2025-06-01 03:47:14', NULL, 0),
(57, 718945378305546, 41, 992016510, 10000, 'Initial Amount', 'I', '2025-06-02 15:02:44', NULL, 0),
(58, 853457325033414, 1, 873982407, 500, 'Online Transfer', 'C', '2025-06-02 15:04:26', NULL, 41),
(59, 853457325033414, 41, 992016510, 500, 'Online Transfer', 'D', '2025-06-02 15:04:26', NULL, 1),
(60, 410865243342484, 38, 192453694, 500, 'Online Transfer', 'C', '2025-06-02 15:05:42', NULL, 41),
(61, 410865243342484, 41, 992016510, 500, 'Online Transfer', 'D', '2025-06-02 15:05:42', NULL, 38),
(62, 986728785115894, 41, 992016510, 10000, 'Cash', 'C', '2025-06-02 15:09:01', 2, 0),
(63, 615429705083685, 41, 992016510, 5000, 'Cash', 'D', '2025-06-02 15:09:49', 2, 0),
(64, 566156369072993, 25, 350212712, 0, 'Initial Amount', 'I', '2025-06-02 15:12:00', NULL, 0),
(65, 896285362067848, 5, 118239573, 900, 'Online Transfer', 'C', '2025-06-05 02:59:12', NULL, 8),
(66, 896285362067848, 8, 333467790, 900, 'Online Transfer', 'D', '2025-06-05 02:59:12', NULL, 5),
(67, 832073783942017, 1, 873982407, 10, 'Online Transfer', 'C', '2025-06-05 03:00:30', NULL, 8),
(68, 832073783942017, 8, 333467790, 10, 'Online Transfer', 'D', '2025-06-05 03:00:31', NULL, 1),
(69, 553667605451931, 1, 873982407, 500, 'Online Transfer', 'C', '2025-06-05 03:03:50', NULL, 8),
(70, 553667605451931, 8, 333467790, 500, 'Online Transfer', 'D', '2025-06-05 03:03:50', NULL, 1),
(71, 780272215898627, 1, 873982407, 200, 'Online Transfer', 'C', '2025-06-05 03:14:07', NULL, 8),
(72, 780272215898627, 8, 333467790, 200, 'Online Transfer', 'D', '2025-06-05 03:14:07', NULL, 1),
(73, 638525981965967, 1, 873982407, 100, 'Online Transfer', 'C', '2025-06-05 03:15:17', NULL, 8),
(74, 638525981965967, 8, 333467790, 100, 'Online Transfer', 'D', '2025-06-05 03:15:17', NULL, 1),
(75, 306019867947857, 45, 365770835, 10000, 'Initial Amount', 'I', '2025-06-06 05:29:37', NULL, 0),
(76, 803237883669047, 1, 873982407, 1000, 'Online Transfer', 'C', '2025-06-06 05:32:39', NULL, 45),
(77, 803237883669047, 45, 365770835, 1000, 'Online Transfer', 'D', '2025-06-06 05:32:39', NULL, 1),
(78, 785349031356434, 38, 192453694, 500, 'Online Transfer', 'C', '2025-06-06 05:34:26', NULL, 45),
(79, 785349031356434, 45, 365770835, 500, 'Online Transfer', 'D', '2025-06-06 05:34:26', NULL, 38),
(80, 438666467040273, 45, 365770835, 10000, 'Cash', 'C', '2025-06-06 05:39:25', 2, 0),
(81, 912963853256239, 45, 365770835, 5000, 'Cash', 'D', '2025-06-06 05:40:04', 2, 0),
(82, 460160869258594, 47, 574950540, 10000, 'Initial Amount', 'I', '2025-06-07 03:23:22', NULL, 0),
(83, 116631862437674, 27, 675882732, 10000, 'Initial Amount', 'I', '2025-06-09 07:07:10', NULL, 0),
(84, 965464531462174, 28, 836952618, 10000, 'Initial Amount', 'I', '2025-06-10 02:56:07', NULL, 0),
(85, 630902963659346, 29, 126006810, 1000, 'Initial Amount', 'I', '2025-06-11 05:00:32', NULL, 0),
(86, 598884191716939, 30, 316249673, 10000, 'Initial Amount', 'I', '2025-06-11 06:08:06', NULL, 0),
(87, 441653908398038, 31, 553962869, 10000, 'Initial Amount', 'I', '2025-06-12 00:56:32', NULL, 0),
(88, 265953654534397, 32, 296581753, 10000, 'Initial Amount', 'I', '2025-06-12 01:07:07', NULL, 0),
(89, 510977059751555, 33, 477066539, 10000, 'Initial Amount', 'I', '2025-06-12 01:12:42', NULL, 0),
(90, 601079895667617, 34, 411061791, 10000, 'Initial Amount', 'I', '2025-06-12 01:25:29', NULL, 0),
(91, 798606201386458, 31, 371483716, 10000, 'Initial Amount', 'I', '2025-06-12 01:26:55', NULL, 0),
(92, 700670412966243, 36, 278954671, 10000, 'Initial Amount', 'I', '2025-06-12 01:39:47', NULL, 0),
(93, 343357947484008, 48, 104611122, 10000, 'Initial Amount', 'I', '2025-06-12 03:54:06', NULL, 0),
(94, 185581821508475, 51, 903237310, 1222, 'Initial Amount', 'I', '2025-06-12 03:56:41', NULL, 0),
(95, 181665726554823, 50, 261161734, 10000, 'Initial Amount', 'I', '2025-06-12 04:26:00', NULL, 0),
(96, 269290878582369, 52, 454352803, 10000, 'Initial Amount', 'I', '2025-06-12 04:26:52', NULL, 0),
(97, 952094270185028, 53, 946931180, 10000, 'Initial Amount', 'I', '2025-06-12 04:28:33', NULL, 0),
(98, 316136878134896, 54, 531177186, 10000, 'Initial Amount', 'I', '2025-06-12 04:50:20', NULL, 0),
(99, 169300513628898, 55, 762203362, 10000, 'Initial Amount', 'I', '2025-06-12 05:12:24', NULL, 0),
(100, 761956658863973, 56, 315781465, 10000, 'Initial Amount', 'I', '2025-06-13 02:18:43', NULL, 0),
(101, 204370116938925, 57, 249305959, 10000, 'Initial Amount', 'I', '2025-06-22 00:54:43', NULL, 0),
(102, 486091110916239, 69, 737553951, 10000, 'Initial Amount', 'I', '2025-06-24 19:06:35', NULL, 0),
(103, 937459185741480, 1, 873982407, 1000, 'Cash', 'C', '2025-06-24 19:25:24', 2, 0),
(104, 640787941775351, 1, 873982407, 500, 'Cash', 'D', '2025-06-24 19:25:46', 2, 0),
(105, 716933426201412, 2, 571991801, 250, 'Online Transfer', 'C', '2025-08-09 10:41:02', NULL, 8),
(106, 716933426201412, 8, 333467790, 250, 'Online Transfer', 'D', '2025-08-09 10:41:02', NULL, 2),
(107, 197567555908006, 1, 873982407, 1000, 'Online Transfer', 'C', '2025-10-28 01:51:15', NULL, 8),
(108, 197567555908006, 8, 333467790, 1000, 'Online Transfer', 'D', '2025-10-28 01:51:15', NULL, 1),
(109, 826828160302326, 1, 873982407, 500, 'Online Transfer', 'C', '2025-11-13 17:39:53', NULL, 8),
(110, 826828160302326, 8, 333467790, 500, 'Online Transfer', 'D', '2025-11-13 17:39:53', NULL, 1),
(111, 488211283781682, 1, 873982407, 200, 'Online Transfer', 'C', '2025-11-15 02:54:12', NULL, 8),
(112, 488211283781682, 8, 333467790, 200, 'Online Transfer', 'D', '2025-11-15 02:54:12', NULL, 1),
(113, 561286933506059, 1, 873982407, 1000, 'Cheque', 'C', '2025-11-15 14:35:14', 2, 0),
(114, 458695609057078, 58, 457530894, 0, 'Initial Amount', 'I', '2025-11-19 01:59:44', NULL, 0),
(115, 105358379409653, 131, 712402800, 10000, 'Initial Amount', 'I', '2025-12-19 09:00:16', NULL, 0),
(116, 459980218930544, 140, 574875428, 10000, 'Initial Amount', 'I', '2025-12-19 09:55:23', NULL, 0),
(117, 443005935774157, 60, 241357219, 10000, 'Initial Amount', 'I', '2025-12-19 10:49:00', NULL, 0),
(118, 548552547120955, 64, 767013985, 10000, 'Initial Amount', 'I', '2025-12-19 11:08:16', NULL, 0),
(119, 338998246060609, 65, 139314492, 10000, 'Initial Amount', 'I', '2025-12-19 11:19:32', NULL, 0),
(120, 476053051229656, 66, 370840812, 10000, 'Initial Amount', 'I', '2025-12-19 11:26:12', NULL, 0),
(121, 516550049815323, 67, 798966393, 10000, 'Initial Amount', 'I', '2025-12-19 11:28:33', NULL, 0),
(122, 983379250357004, 166, 186893261, 10000, 'Initial Amount', 'I', '2025-12-20 11:07:26', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `ID` int(10) NOT NULL,
  `FirstName` varchar(120) DEFAULT NULL,
  `LastName` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Password` varchar(120) DEFAULT NULL,
  `RegDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`ID`, `FirstName`, `LastName`, `MobileNumber`, `Email`, `Password`, `RegDate`) VALUES
(1, 'Rahul', 'Kumar', 4564564561, 'rahul12@gmail.com', 'ebaaba27b32928a25f2ad6185fc0cc74', '2025-01-01 17:40:22'),
(2, 'Anuj', 'kumar', 9354778033, 'anujk30@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2025-01-01 05:57:00'),
(3, 'Manish', 'Gupta', 1233211230, 'manish123@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2025-01-06 14:59:54'),
(4, 'Garima ', 'Singh', 1425362514, 'graima12@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2025-01-15 14:44:11'),
(5, 'John', 'Doe', 9876543210, 'johndeo12@t.com', 'f925916e2754e5e03f75dd58a5733251', '2025-01-22 16:09:14'),
(6, 'Nagaraju', 'yajjuvarapu', 9393486190, 'yajjuvarapu.nagaraju@gmail.com', 'fd2fb732caf4ae0ad14f4f14e2f7caf8', '2025-04-26 09:19:52'),
(7, 'abc', 'cdf', 987654321, 'abc@gmail.com', 'b24331b1a138cde62aa1f679164fc62f', '2025-04-26 09:37:53'),
(8, 'Automation', 'User', 9999999999, 'user@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-04-26 13:03:28'),
(9, 'test', 'test', 9999999999, 'testuser@gmail.com', 'ceb6c970658f31504a901b89dcd3e461', '2025-05-01 11:13:41'),
(10, 'testUser', 'test', 9999999999, 'test@gmail.com', 'ceb6c970658f31504a901b89dcd3e461', '2025-05-09 04:35:11'),
(11, 'ssss', 'sss', 9999999999, 'ssss@gmail.com', '0f69388baf48cb4c74e77470e1aa500b', '2025-05-17 17:13:11'),
(12, 'user_3b4e4a', 'yajjuvarapu', 9000086190, 'user_11d806@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-18 01:59:52'),
(13, 'test', 'test', 999999999, 'test123@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2025-05-18 11:17:07'),
(14, 'user_7ee537', 'yajjuvarapu', 9000086190, 'user_e22f7c@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-23 08:16:24'),
(15, 'user1234', 'test', 9999999999, 'user@1234.com', '457a872fc937806fcbbceea03c0b369c', '2025-05-25 07:07:20'),
(16, 'user_f3fdd1', 'yajjuvarapu', 9999999999, 'user_21e760@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 04:00:39'),
(17, 'user_9d7156', 'yajjuvarapu', 9000086190, 'user_2510e5@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:05:41'),
(18, 'user_0938e9', 'yajjuvarapu', 9000086190, 'user_ebd331@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:09:59'),
(19, 'user_cb9515', 'yajjuvarapu', 9000086190, 'user_2122f0@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:14:25'),
(20, 'user_fa351d', 'yajjuvarapu', 9000086190, 'user_4ba450@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:18:15'),
(21, 'user_32bac0', 'yajjuvarapu', 9000086190, 'user_74305c@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:21:11'),
(22, 'user_1c5673', 'yajjuvarapu', 9000086190, 'user_0f8f05@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:30:22'),
(23, 'user_dbe56e', 'yajjuvarapu', 9000086190, 'user_71f126@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:39:50'),
(24, 'user_55e2b1', 'yajjuvarapu', 9000086190, 'user_920b6b@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:43:17'),
(25, 'user_c0d809', 'yajjuvarapu', 9000086190, 'user_9f83d2@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:47:55'),
(26, 'user_8f0d56', 'yajjuvarapu', 9000086190, 'user_d149b0@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 06:59:58'),
(27, 'user_cfafa0', 'yajjuvarapu', 9000086190, 'user_5485a7@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:05:35'),
(28, 'user_57d9cc', 'yajjuvarapu', 9000086190, 'user_9a6e2a@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:12:15'),
(29, 'user_c81718', 'yajjuvarapu', 9000086190, 'user_d92546@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:15:48'),
(30, 'user_74b1d1', 'yajjuvarapu', 9000086190, 'user_f4d04c@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:17:16'),
(31, 'user_c63fa9', 'yajjuvarapu', 9000086190, 'user_62320f@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:18:42'),
(32, 'user_66899c', 'yajjuvarapu', 9000086190, 'user_c8c5bd@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:24:58'),
(33, 'user_483471', 'yajjuvarapu', 9000086190, 'user_c39030@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:28:04'),
(34, 'user_b75adf', 'yajjuvarapu', 9000086190, 'user_6c00b0@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:34:57'),
(35, 'user_6499f8', 'yajjuvarapu', 9000086190, 'user_c774ac@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:37:18'),
(36, 'user_b57100', 'yajjuvarapu', 9000086190, 'user_12906b@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-05-28 07:38:27'),
(37, 'raju', 'raju', 9000086199, 'raju@gmial.com', '98b60f694bf91702ba7695b8f9f1ce31', '2025-05-31 07:22:51'),
(38, 'Nagaraju', 'yajjuvarapu', 9000086180, 'Nagaraju@hotmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-01 03:29:25'),
(39, 'Nagaraju', 'Yajjuvarapu', 9000086199, 'nagaraju123@gmail.com', '6848fb690410c09a85782b4ea1044854', '2025-06-02 04:19:37'),
(40, 'Nagaraju ', 'yajjuvarapu', 9999999999, 'nagaraju@yahoo.com', '6848fb690410c09a85782b4ea1044854', '2025-06-02 14:54:46'),
(41, 'nagaraju', 'yajjuvarapu', 9898989898, 'nagaraju@mail.com', '6848fb690410c09a85782b4ea1044854', '2025-06-02 14:58:23'),
(42, 'user_c5ccf8', 'yajjuvarapu', 9999999999, 'user_a61e00@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-03 01:10:21'),
(43, 'user_555cb3', 'yajjuvarapu', 9999999999, 'user_c23216@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-03 01:16:47'),
(44, 'user_1c0f40', 'yajjuvarapu', 9999999999, 'user_e4caa2@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-03 01:22:27'),
(45, 'raju 123', 'yajjuvarapu', 9878799870, 'raju@gmail.com', '65802b20481bde0db4b66526e07a4baa', '2025-06-06 05:25:40'),
(46, 'user_3fd9f8', 'yajjuvarapu', 9999999999, 'user_2f93a1@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-07 03:17:43'),
(47, 'user_f4ce0f', 'yajjuvarapu', 9000086190, 'user_8490b5@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-07 03:18:44'),
(48, 'user_a32c62', 'yajjuvarapu', 9000086190, 'user_98ec81@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 04:23:28'),
(49, 'user_bb0e97', 'yajjuvarapu', 9000086190, 'user_26fcd7@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 05:45:40'),
(50, 'ram', 'y', 9879879877, 'ram@gmail.com', '3db66ceb605c1bcb779c63e180c4f2d0', '2025-06-08 08:14:04'),
(51, 'user_2e4d52', 'yajjuvarapu', 9000086190, 'user_a6b29d@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 08:50:03'),
(52, 'user_1b84f0', 'yajjuvarapu', 9000086190, 'user_0e7b80@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 08:51:49'),
(53, 'user_5eff3e', 'yajjuvarapu', 9000086190, 'user_eb8b3e@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 09:00:00'),
(54, 'user_78a603', 'yajjuvarapu', 9000086190, 'user_63882f@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 10:53:56'),
(55, 'user_760b1b', 'yajjuvarapu', 9000086190, 'user_1a8bf5@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-08 10:55:04'),
(56, 'user_9ba805', 'yajjuvarapu', 9000086190, 'user_65e1c9@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-12 05:51:59'),
(57, 'user_847c99', 'yajjuvarapu', 9000086190, 'user_70f84a@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 05:59:20'),
(58, 'user_04754b', 'yajjuvarapu', 9000086190, 'user_ed5215@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 06:06:17'),
(59, 'user_eeeea7', 'yajjuvarapu', 9000086190, 'user_164be1@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 06:07:48'),
(60, 'user_555e0f', 'yajjuvarapu', 9000086190, 'user_a13188@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 06:09:45'),
(61, 'user_7fb2f5', 'yajjuvarapu', 9000086190, 'user_3445c9@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 06:21:25'),
(62, 'user_445244', 'yajjuvarapu', 9000086190, 'user_07cfe8@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 06:23:09'),
(63, 'user_93d93d', 'yajjuvarapu', 9000086190, 'user_fdf2a7@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-21 07:47:28'),
(64, 'user_0de260', 'yajjuvarapu', 9000086190, 'user_ff7da8@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-23 05:01:24'),
(65, 'user_4d5e4d', 'yajjuvarapu', 9000086190, 'user_1b3637@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-23 05:15:36'),
(66, 'user_3eac9d', 'yajjuvarapu', 9000086190, 'user_62d070@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-23 16:50:48'),
(67, 'user_c2d8f3', 'yajjuvarapu', 9000086190, 'user_cb7f59@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-23 16:56:02'),
(68, 'user_6cfffc', 'yajjuvarapu', 9000086190, 'user_dbfaa4@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-06-23 17:00:38'),
(69, 'nagaraju', 'yajjuvarapu', 9000086190, 'nagaraju.yajjuvarapu@gmail.com', 'b24331b1a138cde62aa1f679164fc62f', '2025-06-24 19:02:32'),
(70, 'user_dd7534', 'yajjuvarapu', 9000086190, 'user_bf55c0@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-08-09 15:20:13'),
(71, 'user_be14d8', 'yajjuvarapu', 9999999999, 'user_82fbbd@gmail.com', 'ba5ef51294fea5cb4eadea5306f3ca3b', '2025-11-12 01:55:31'),
(72, 'TestUser', 'TestLastName', 9000086190, 'TestUser123@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2025-11-13 15:53:34'),
(73, 'nagaraju1214', 'test', 980909898, 'nagaraju1214@gmail.com', 'd658afa26368f78730b466c8e2e6e366', '2025-11-15 02:28:51'),
(74, 'Surya', 'M', 9876543210, 'surya@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-09 17:20:25'),
(75, 'testq', 'test', 808908980, 'abc@test.com', '098f6bcd4621d373cade4e832627b4f6', '2025-12-10 05:18:58'),
(76, 'Dileep', 'M', 9963512354, 'dileep@gmail.com', '07dc03ca14aed9eba772208b2664d2e9', '2025-12-10 06:23:49'),
(77, 'Surya123', 'M', 9876543210, 'surya123@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-10 06:26:21'),
(78, 'Surya123', 'M', 9876543210, 'surya1234@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-10 06:32:05'),
(79, 'Surya123', 'M', 9876543210, 'surya1@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-10 06:38:00'),
(80, 'Surya123', 'M', 9876543210, 'surya12@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-10 06:41:32'),
(81, 'Surya123', 'M', 9876543210, 'surya124@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-10 06:43:23'),
(82, 'Surya123', 'M', 9876543210, 'surya1245@gmail.com', '7ba3b0efbecb6ac7976afd8149852289', '2025-12-10 07:11:12'),
(83, 'Surya123691', 'M', 9876543210, 'surya1245@gmail.com753', 'f0692ce861cc839d204d19d5dd6a6b4b', '2025-12-16 09:25:59'),
(84, 'Surya123590', 'M', 9876543210, 'surya1245@gmail.com286', 'b28cb371b72e1c021152c1b028bfab64', '2025-12-16 09:56:19'),
(85, 'Surya123586', 'M', 9876543210, 'surya1245@gmail.com113', '8f24e47ece46a668a33d7e9f7d8e31a3', '2025-12-16 09:56:56'),
(86, 'Surya123862', 'M', 9876543210, 'surya1245@gmail.com697', '1b0c73b111024474bc2d8ae0ab21057d', '2025-12-16 09:57:20'),
(87, 'Surya123912', 'M', 9876543210, 'surya1245@gmail.com817', 'd84db224bbeac7537100ec11ee817f4a', '2025-12-16 09:57:59'),
(88, 'surya12', 'M', 9963545123, 'surya121@gmail.com', 'aff8fbcbf1363cd7edc85a1e11391173', '2025-12-16 10:01:47'),
(89, 'Surya123263', 'M', 9876543210, 'surya1245@gmail.com375', 'f849705be34c95435e5ac61ff5135e9e', '2025-12-16 10:03:20'),
(90, 'Surya123314', 'M', 9876543210, 'surya1245@gmail.com161', '9955545a223c9012be805ca82b957c5c', '2025-12-16 10:04:11'),
(91, 'Surya123830', 'M', 9876543210, 'surya1245@gmail.com952', '36ddc9d179583ce0773f46b917a76238', '2025-12-16 10:05:18'),
(92, 'Surya123821', 'M', 9876543210, 'surya1245@gmail.com378', '4b1409abd33e8d58ec981bab4789a11f', '2025-12-16 10:29:19'),
(93, 'Surya123562', 'M', 9876543210, 'surya1245@gmail.com235', 'cbe10b9316ace3fdad766fee6fb58715', '2025-12-16 10:32:12'),
(94, 'Surya123415', 'M', 9876543210, 'surya1245@gmail.com409', '961eaeb9c3107ccee95b7dc05c3c5bc7', '2025-12-16 11:10:26'),
(95, 'Surya123254', 'M', 9876543210, 'surya1245@gmail.com664', '45257b59bd99644f75d048fa24f50320', '2025-12-16 11:20:53'),
(96, 'Surya123583', 'M', 9876543210, 'surya1245@gmail.com724', '96875cdb0b1a3abb706a2c0346436c74', '2025-12-16 11:21:35'),
(97, 'Surya123619', 'M', 9876543210, 'surya1245@gmail.com962', '961eaeb9c3107ccee95b7dc05c3c5bc7', '2025-12-16 11:34:21'),
(98, 'Surya123387', 'M', 9876543210, 'surya1245@gmail.com709', '06bd5ce145a504c0c96e167b627bd123', '2025-12-16 11:37:49'),
(99, 'Surya123240', 'M', 9876543210, 'surya1245@gmail.com466', '6799276d820be6efb3ac405777359370', '2025-12-16 11:38:01'),
(100, 'Surya123680', 'M', 9876543210, 'surya1245@gmail.com904', 'fc7b095da8a7f7013e87d384e9a92636', '2025-12-16 11:38:22'),
(101, 'Surya123589', 'M', 9876543210, 'surya1245@gmail.com230', 'ec0277a717fe70f896464907a0a8639f', '2025-12-16 11:38:45'),
(102, 'Surya123619', 'M', 9876543210, 'surya1245@gmail.com984', '038c8787869e7442d4e18245ebe71e7b', '2025-12-16 16:38:11'),
(103, 'Surya123520', 'M', 9876543210, 'surya1245@gmail.com713', '5f96f89fc458a80bbed87e07925ce7b4', '2025-12-16 16:39:01'),
(104, 'Surya123684', 'M', 9876543210, 'surya1245@gmail.com861', 'b7c5d6b3d9e1e17e173ee4d5df50cd68', '2025-12-16 16:40:27'),
(105, 'Surya123931', 'M', 9876543210, 'surya1245@gmail.com195', 'd2a65bc7f94fe15eacb72c590722e92c', '2025-12-16 16:41:47'),
(106, 'Surya123700', 'M', 9876543210, 'surya1245699@gmail.com', 'ffcaa08ff5b09fbbc50828ba73697ebc', '2025-12-16 16:55:34'),
(107, 'Surya123769', 'M', 9876543210, 'surya1245164@gmail.com', '6342a822c5a3c28c28e84d99afd30037', '2025-12-17 05:07:24'),
(108, 'Surya123435', 'M', 9876543210, 'surya1245749@gmail.com', '9f1b319f246486375b7da20421c9ff5e', '2025-12-17 05:09:04'),
(109, 'Surya123990', 'M', 9876543210, 'surya1245436@gmail.com', '65734b99230e42cf02bb40536e94c640', '2025-12-17 05:16:28'),
(110, 'Surya123618', 'M', 9876543210, 'surya1245914@gmail.com', 'e4f21fbefff7ea951ac7f6aa77267dc0', '2025-12-17 05:16:47'),
(111, 'Surya123809', 'M', 9876543210, 'surya1245980@gmail.com', 'af5c0c3106b7753916c9f95c1b3bf754', '2025-12-17 05:17:37'),
(112, 'Surya123924', 'M', 9876543210, 'surya1245924@gmail.com', 'd718d6445d274bc11f6c10f828e10013', '2025-12-17 05:28:47'),
(113, 'Surya123595', 'M', 9876543210, 'surya1245910@gmail.com', '236881ed6a370ff4978dc49a23a9589e', '2025-12-17 05:32:12'),
(114, 'Surya123426', 'M', 9876543210, 'surya1245179@gmail.com', 'b40d0a1f6eea948c7369129bcd542ce6', '2025-12-17 05:33:43'),
(115, 'Surya123738', 'M', 9876543210, 'surya1245343@gmail.com', '49550fde61f610a4c9fac9074ef03088', '2025-12-17 05:34:10'),
(116, 'Surya123857', 'M', 9876543210, 'surya1245625@gmail.com', '1d5cd90069450272cee2c8c21ba278b2', '2025-12-17 05:35:03'),
(117, 'Surya123468', 'M', 9876543210, 'surya1245590@gmail.com', '4733bc7d6b2114e28e19d008a40c6865', '2025-12-17 05:35:18'),
(118, 'Surya123511', 'M', 9876543210, 'surya1245524@gmail.com', '398de823f03fd6fa28d7a2f2bfbae49f', '2025-12-17 05:35:32'),
(119, 'Surya123649', 'M', 9876543210, 'surya1245122@gmail.com', 'a6d26f3f1830adeddd7362ecdff98011', '2025-12-17 05:35:46'),
(120, 'Surya123778', 'M', 9876543210, 'surya1245789@gmail.com', '7f3a0c00e6dd6c2afff27d0c48988d65', '2025-12-17 05:36:19'),
(121, 'Surya123586', 'M', 9876543210, 'surya1245522@gmail.com', 'b92f003e9c2bbbcba7b1351a45379a01', '2025-12-17 05:48:43'),
(122, 'Surya123841', 'M', 9876543210, 'surya1245185@gmail.com', 'a88fd6b91f8b29d1a5e8d94b71ff82c3', '2025-12-17 05:49:03'),
(123, 'Surya123922', 'M', 9876543210, 'surya1245752@gmail.com', 'eca8c5d423b4a5cd5cac0513ff2a6492', '2025-12-17 05:49:18'),
(124, 'Surya123388', 'M', 9876543210, 'surya1245897@gmail.com', '4bd429d606844b28e9ea5964f19deb08', '2025-12-17 05:51:18'),
(125, 'Surya123393', 'M', 9876543210, 'surya1245583@gmail.com', 'bd84f40dbcbef4d1d79e4c55080dfcce', '2025-12-17 05:52:42'),
(126, 'Surya123540', 'M', 9876543210, 'surya1245105@gmail.com', 'c72b015c59e276dbff22c0afdc56ad08', '2025-12-17 05:53:00'),
(127, 'Surya123653', 'M', 9876543210, 'surya1245261@gmail.com', '0dad7400d9cec86b4cc0cdb53b94d51d', '2025-12-17 09:43:13'),
(128, 'Surya123849', 'M', 9876543210, 'surya1245252@gmail.com', '3643490528a5d309a41fa324bf8ed6ff', '2025-12-17 09:43:53'),
(129, 'Surya123574', 'M', 9876543210, 'surya1245201@gmail.com', '90c47d51afba81b55346dc22b2f29bd3', '2025-12-17 09:45:01'),
(130, 'Surya123450', 'M', 9876543210, 'surya1245157@gmail.com', 'a7ad8849d77472bf2a1081a656045464', '2025-12-17 09:45:15'),
(131, 'Sita', 'M', 9963563515, 'sita@gmail.com', '22eb6d573a7bdfd019b97909cbe36141', '2025-12-17 10:14:56'),
(132, 'Surya123633', 'M', 9876543210, 'surya1245594@gmail.com', '5021fa2800f0e3669cff3057842dac94', '2025-12-18 06:06:58'),
(133, 'Surya123197', 'M', 9876543210, 'surya1245521@gmail.com', 'e6f672732b8d5bf70e3f5ff7d06886ac', '2025-12-18 06:11:18'),
(134, 'Surya123550', 'M', 9876543210, 'surya1245838@gmail.com', 'd6e2dc3194826d1cf9baae911a85f17d', '2025-12-18 06:26:49'),
(135, 'Surya123218', 'M', 9876543210, 'surya1245703@gmail.com', 'c5192f7d367a6bd464c355869327a9a7', '2025-12-18 06:32:15'),
(136, 'Surya123535', 'M', 9876543210, 'surya1245719@gmail.com', '76232544b2cbdc34ecd43399b90497bb', '2025-12-18 06:34:58'),
(137, 'Surya123845', 'M', 9876543210, 'surya1245661@gmail.com', 'b33556ed78eb69657b25084d1326eed4', '2025-12-18 06:40:04'),
(138, 'Surya123886', 'M', 9876543210, 'surya1245885@gmail.com', '8c1810fd35c00d574df05add8ec44dad', '2025-12-18 06:45:54'),
(139, 'Surya123689', 'M', 9876543210, 'surya1245610@gmail.com', '76f438f09d24c877b249858b2b996f79', '2025-12-18 07:00:23'),
(140, 'Surya123414', 'M', 9876543210, 'surya1245937@gmail.com', '37c98c35a7c7afad2bc49572919d52bd', '2025-12-18 07:03:13'),
(141, 'Surya123595', 'M', 9876543210, 'surya1245842@gmail.com', '27634a45de3365f5201026d7dbb123dd', '2025-12-18 08:42:43'),
(142, 'Surya123269', 'M', 9876543210, 'surya1245549@gmail.com', '90ee653ce3a5e72bf0b9bf13b60440a5', '2025-12-18 08:54:04'),
(143, 'M', 'Ravi', 9635845126, 'ravi@gmail.com', '1790f19d6edb09a7a94870e99c7b0689', '2025-12-18 08:58:16'),
(144, 'Surya123472', 'M', 9876543210, 'surya1245475@gmail.com', 'd803defa44e110b8ca10c141d7f3c5b5', '2025-12-18 09:43:57'),
(145, 'Surya123874', 'M', 9876543210, 'surya1245742@gmail.com', 'a058ab7103d09b6ccbeda20a37c9635c', '2025-12-18 10:40:25'),
(146, 'Surya123203', 'M', 9876543210, 'surya1245431@gmail.com', '4dfc54704f0c05687b7019fea71efdc9', '2025-12-18 10:44:28'),
(147, 'Madhavi', 'Y', 9985412345, 'madhavi@gmail.com', '417463d8e237c59e093d7c411b9da88e', '2025-12-18 10:46:03'),
(148, 'Surya123210', 'M', 9876543210, 'surya1245542@gmail.com', '548d37f444b12664c67c2a9f8501cc95', '2025-12-18 10:47:29'),
(149, 'Surya123930', 'M', 9876543210, 'surya1245589@gmail.com', 'b1a3a1f36040c2a07a4625f611be2cdb', '2025-12-18 10:49:07'),
(150, 'Surya123208', 'M', 9876543210, 'surya1245570@gmail.com', '08884bad63c6e13ed73b54f7a7bbb927', '2025-12-18 10:50:16'),
(151, 'Surya123244', 'M', 9876543210, 'surya1245419@gmail.com', '2035f36db0c5fbc495fe157635967392', '2025-12-19 05:29:08'),
(152, 'Surya123583', 'M', 9876543210, 'surya1245134@gmail.com', '38303d1d238f3afd14fb206856cb4db8', '2025-12-19 05:30:33'),
(153, 'Surya123464', 'M', 9876543210, 'surya1245717@gmail.com', 'ec0277a717fe70f896464907a0a8639f', '2025-12-19 05:31:45'),
(154, 'Surya123337', 'M', 9876543210, 'surya1245750@gmail.com', '8a82bfb8b12490892975481b413f7e20', '2025-12-19 05:32:25'),
(155, 'Surya123254', 'M', 9876543210, 'surya1245558@gmail.com', '3ad5fa32244a5648c5d230c25b8ae714', '2025-12-19 05:45:12'),
(156, 'Surya123666', 'M', 9876543210, 'surya1245662@gmail.com', '5af97ea8804f8fb4b4a778a5d1a9a2fc', '2025-12-19 05:59:25'),
(157, 'Surya123717', 'M', 9876543210, 'surya1245233@gmail.com', '19a5352511e759f0f71cd5201d75de5a', '2025-12-19 06:03:41'),
(158, 'Surya123975', 'M', 9876543210, 'surya1245176@gmail.com', '23017d89d02f91889933d12451b4ab7b', '2025-12-19 11:09:55'),
(159, 'Surya123405', 'M', 9876543210, 'surya1245989@gmail.com', '8c6e363c1bdf1d7ba4f04e97a156bee6', '2025-12-19 11:11:28'),
(160, 'Surya123936', 'M', 9876543210, 'surya1245711@gmail.com', '834514f3a6fef910bbed7dd6808013c4', '2025-12-19 11:18:02'),
(161, 'Surya123386', 'M', 9876543210, 'surya1245175@gmail.com', '14cdd580e5cfa04215f879778ce45de2', '2025-12-19 11:41:37'),
(162, 'Surya123378', 'M', 9876543210, 'surya1245264@gmail.com', 'ec0fecafe533e41a2e55582083a8ca20', '2025-12-19 11:43:49'),
(163, 'Surya123961', 'M', 9876543210, 'surya1245483@gmail.com', '8bc62d9c1b4eea97e06b3e38a9942409', '2025-12-19 11:50:51'),
(164, 'Surya123873', 'M', 9876543210, 'surya1245894@gmail.com', '79dfda7490f25e206df5018f0c4885a5', '2025-12-20 05:20:00'),
(165, 'Surya123200', 'M', 9876543210, 'surya1245578@gmail.com', '2673b6ac7ac167c2d606ded0e0ac35af', '2025-12-20 10:59:58'),
(166, 'Surya123342', 'M', 9876543210, 'surya1245979@gmail.com', 'e8165657980398d324a0b4eb3e9c1fd4', '2025-12-20 11:04:49'),
(167, 'Surya123500', 'M', 9876543210, 'surya1245808@gmail.com', 'a186212dbfa4fc1b13834d3c0c208434', '2026-02-04 10:41:07'),
(168, 'Surya123746', 'M', 9876543210, 'surya1245845@gmail.com', '4b6d5c06ffb276ae226220d5e9c538ff', '2026-02-04 10:41:13'),
(169, 'Surya123469', 'M', 9876543210, 'surya1245429@gmail.com', '1d5cd90069450272cee2c8c21ba278b2', '2026-02-10 10:12:46'),
(170, 'Surya123634', 'M', 9876543210, 'surya1245304@gmail.com', '67101211aaf39fa27ecd9f0dac3b7849', '2026-02-10 10:13:36'),
(171, 'Surya123135', 'M', 9876543210, 'surya1245388@gmail.com', 'ef375b24638a7350ec0bd8598ca1e918', '2026-02-11 10:03:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblaccountdetails`
--
ALTER TABLE `tblaccountdetails`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `uid` (`Userid`),
  ADD KEY `AccountNumber` (`AccountNumber`);

--
-- Indexes for table `tbladmin`
--
ALTER TABLE `tbladmin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblcashier`
--
ALTER TABLE `tblcashier`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpage`
--
ALTER TABLE `tblpage`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpayee`
--
ALTER TABLE `tblpayee`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `userid` (`Userid`),
  ADD KEY `ano` (`AccountNumber`);

--
-- Indexes for table `tbltransaction`
--
ALTER TABLE `tbltransaction`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `uuid` (`UserID`),
  ADD KEY `accntno` (`AccountNumber`),
  ADD KEY `cashierId` (`cashierId`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblaccountdetails`
--
ALTER TABLE `tblaccountdetails`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `tbladmin`
--
ALTER TABLE `tbladmin`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblcashier`
--
ALTER TABLE `tblcashier`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblpage`
--
ALTER TABLE `tblpage`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tblpayee`
--
ALTER TABLE `tblpayee`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbltransaction`
--
ALTER TABLE `tbltransaction`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
