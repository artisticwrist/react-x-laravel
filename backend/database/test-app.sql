-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2024 at 07:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_11_19_075640_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'YourAppName', '314171605c914f7efd416f13c0dc6753c823dc1ac734759259bf23b62ee1589d', '[\"*\"]', NULL, NULL, '2024-11-19 07:09:07', '2024-11-19 07:09:07'),
(2, 'App\\Models\\User', 3, 'YourAppName', 'c3dec1b141afeb79c1a393f3035376176664ecc9269354e8fa596b129ff8d5c2', '[\"*\"]', NULL, NULL, '2024-11-19 07:10:26', '2024-11-19 07:10:26'),
(4, 'App\\Models\\User', 4, 'YourAppName', 'e93db248b27f8827a456a333998488907df86d08cb190c315961b00d2fedcd19', '[\"*\"]', NULL, NULL, '2024-11-19 07:29:19', '2024-11-19 07:29:19'),
(5, 'App\\Models\\User', 5, 'YourAppName', '061a53a8969fffeb6387330f889c7a64e8e651eea1b5d681b6fffbee9ad5ede1', '[\"*\"]', NULL, NULL, '2024-11-19 08:04:02', '2024-11-19 08:04:02'),
(6, 'App\\Models\\User', 6, 'YourAppName', 'cc9fbc5ea04a306f78ecba87baaae9ea207e2707ec3f8545a325a2f3331e8c0f', '[\"*\"]', NULL, NULL, '2024-11-19 08:11:57', '2024-11-19 08:11:57'),
(7, 'App\\Models\\User', 7, 'YourAppName', '92ab6b37c020100c5e6c116841b11d5860f3e1bff0662f42781d0c3d066ff93b', '[\"*\"]', NULL, NULL, '2024-11-19 08:12:44', '2024-11-19 08:12:44'),
(8, 'App\\Models\\User', 8, 'YourAppName', 'a3ac14f9d05ea17b7093deece0c0fe28879d8a6988a01764dd2636de854d8f54', '[\"*\"]', NULL, NULL, '2024-11-19 08:15:11', '2024-11-19 08:15:11'),
(9, 'App\\Models\\User', 7, 'auth_token', '17f26d2a676251e4a74e713296bbb2eb7cb22d501d85520c996ff1a49fa04925', '[\"*\"]', NULL, NULL, '2024-11-19 08:15:51', '2024-11-19 08:15:51'),
(10, 'App\\Models\\User', 7, 'auth_token', '660c1b490df506641d80fcc63a0140d88b2761d7533cf79e098b3f896e6b5ba7', '[\"*\"]', NULL, NULL, '2024-11-19 08:18:18', '2024-11-19 08:18:18'),
(11, 'App\\Models\\User', 7, 'auth_token', 'e97cb116f552db0c3e6d161769de51c9590f5ed74febd92033c4b2eba270a1bf', '[\"*\"]', NULL, NULL, '2024-11-19 08:23:30', '2024-11-19 08:23:30'),
(12, 'App\\Models\\User', 9, 'YourAppName', '580da3a449281b77d3f1bdc1f8596f7fd7e64e32dd137e9294e013ad52f89260', '[\"*\"]', '2024-11-19 10:19:50', NULL, '2024-11-19 10:14:18', '2024-11-19 10:19:50'),
(13, 'App\\Models\\User', 10, 'YourAppName', '09e3587f3a12247afbef5620d6f46e39334c4715dca7c67ab8d5fffb61227cbe', '[\"*\"]', NULL, NULL, '2024-11-19 10:17:00', '2024-11-19 10:17:00'),
(14, 'App\\Models\\User', 11, 'YourAppName', '0d7d00b9f640a2942ee15912035e1d778668dfdd72bc9df2fa1effa634d415d2', '[\"*\"]', '2024-11-19 10:30:53', NULL, '2024-11-19 10:20:16', '2024-11-19 10:30:53'),
(15, 'App\\Models\\User', 12, 'YourAppName', 'ea427169ee60e7d0a9d0a75179c1918525159856625664af1acc635f51be023b', '[\"*\"]', '2024-11-19 10:25:11', NULL, '2024-11-19 10:24:19', '2024-11-19 10:25:11'),
(16, 'App\\Models\\User', 13, 'YourAppName', '55dabc2fc2d9019751dc9588c956e0e505fe8e96b80623accd575e712d070167', '[\"*\"]', '2024-11-19 10:38:43', NULL, '2024-11-19 10:25:54', '2024-11-19 10:38:43'),
(17, 'App\\Models\\User', 14, 'YourAppName', '0248e44184bc33fed643a2ca50157fd253606ecf34f40282b7883738974a4af4', '[\"*\"]', '2024-11-19 10:33:55', NULL, '2024-11-19 10:31:13', '2024-11-19 10:33:55'),
(18, 'App\\Models\\User', 15, 'YourAppName', '69d2be6aa9d3534bef9510c94c714c345b9942b7fbbdb58c6ece3c78a58eaae3', '[\"*\"]', '2024-11-19 10:34:30', NULL, '2024-11-19 10:34:15', '2024-11-19 10:34:30'),
(19, 'App\\Models\\User', 16, 'YourAppName', '8e03b0a1ca722fcfe88b4f8c682a2935fe4d819e7461f635dd52f94236b66221', '[\"*\"]', '2024-11-19 10:52:19', NULL, '2024-11-19 10:34:51', '2024-11-19 10:52:19'),
(20, 'App\\Models\\User', 17, 'YourAppName', 'bd011043fee63e29502d0072c3552669dde1f5f8c20c94e9a06a576e60f91dcc', '[\"*\"]', NULL, NULL, '2024-11-19 10:39:01', '2024-11-19 10:39:01'),
(21, 'App\\Models\\User', 18, 'YourAppName', 'cb38e3b46b732782d10b0e94fdf48ea850bbdb4f774cc36d77a39dfc16229565', '[\"*\"]', '2024-11-19 10:40:56', NULL, '2024-11-19 10:39:38', '2024-11-19 10:40:56'),
(22, 'App\\Models\\User', 19, 'YourAppName', '6c6b68fb373e2c7e463798b56f9b900dcd36ee51955b684873cdad506dadb36a', '[\"*\"]', NULL, NULL, '2024-11-19 10:41:07', '2024-11-19 10:41:07'),
(23, 'App\\Models\\User', 20, 'YourAppName', 'c47b60d1c65144a7fd4b60a0bd9f071878fe814b2e3d42da40e36e243ac9fc2d', '[\"*\"]', '2024-11-19 10:42:01', NULL, '2024-11-19 10:41:21', '2024-11-19 10:42:01'),
(24, 'App\\Models\\User', 21, 'YourAppName', '40f52000e5192e0b19c21e00b44f30c2a7ba8ba00f0d92c18d02dc611f570a9c', '[\"*\"]', '2024-11-19 10:42:33', NULL, '2024-11-19 10:42:10', '2024-11-19 10:42:33'),
(25, 'App\\Models\\User', 22, 'YourAppName', '4fb8596ff37c5f4055592eb4eaf48e9e29e6ba73d1389ae50a3195542ef6b9cf', '[\"*\"]', '2024-11-19 10:56:38', NULL, '2024-11-19 10:42:59', '2024-11-19 10:56:38'),
(26, 'App\\Models\\User', 23, 'YourAppName', '07528e612c5e2b3fbc1da7fe313a5d20380d6b120383a9851d6f78bdbacdfd33', '[\"*\"]', '2024-11-19 11:27:06', NULL, '2024-11-19 10:52:34', '2024-11-19 11:27:06'),
(27, 'App\\Models\\User', 24, 'YourAppName', 'c1b6c36c780b1ac781263195e51785b79a7c678883207f2e76a098880e05f127', '[\"*\"]', '2024-11-19 10:57:40', NULL, '2024-11-19 10:56:46', '2024-11-19 10:57:40'),
(28, 'App\\Models\\User', 25, 'YourAppName', '9c00ae870b6281b570a37a3534ae5e637fe2165a3a14aff5a7f9f39e70262eb2', '[\"*\"]', '2024-11-19 11:02:29', NULL, '2024-11-19 10:57:48', '2024-11-19 11:02:29'),
(29, 'App\\Models\\User', 26, 'YourAppName', 'dbf35352b27dc83686134aa0826ce759defa30a59eb91bf82e65dcfefe7885bb', '[\"*\"]', '2024-11-19 11:27:06', NULL, '2024-11-19 11:02:39', '2024-11-19 11:27:06'),
(30, 'App\\Models\\User', 27, 'YourAppName', '0c6b670e2d5122f1444fef866e8ffe09e14540e032860e847d1027e13621eff7', '[\"*\"]', '2024-11-19 11:27:50', NULL, '2024-11-19 11:27:43', '2024-11-19 11:27:50'),
(31, 'App\\Models\\User', 28, 'YourAppName', 'e6c90241a27587e7acef0e99cbb678de0459ade40cf30d31069795d3abc8de11', '[\"*\"]', '2024-11-19 11:32:40', NULL, '2024-11-19 11:32:34', '2024-11-19 11:32:40'),
(32, 'App\\Models\\User', 28, 'auth_token', 'eb9bb64a251d8b5ee34524df4590a9916eeafc39c84ac10624812a7e4b16a128', '[\"*\"]', '2024-11-19 11:33:00', NULL, '2024-11-19 11:32:59', '2024-11-19 11:33:00'),
(33, 'App\\Models\\User', 28, 'auth_token', '03da354228293a2f250bfa8986196891341fba7d4370204b206856b0de1e7c50', '[\"*\"]', '2024-11-19 12:08:20', NULL, '2024-11-19 12:08:15', '2024-11-19 12:08:20'),
(34, 'App\\Models\\User', 29, 'YourAppName', '4aa71a3ecf403c3237943aa90629eaf5008a4070132038742df37d210ddd1ae3', '[\"*\"]', '2024-11-19 13:12:48', NULL, '2024-11-19 13:12:33', '2024-11-19 13:12:48');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
