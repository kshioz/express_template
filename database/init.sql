
DROP DATABASE sampledb;
CREATE DATABASE sampledb;

USE sampledb;

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(10000) NOT NULL,
  `at_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `at_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `article` ADD PRIMARY KEY (`id`);
ALTER TABLE `article` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
