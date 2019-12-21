-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: wickedSales
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Alvin Cutting Mat',3400,'/images/alvin-cutting-mat.jpg','Cut with any kind of paper and not worry about it sticking to the surface of the cutting mat.','These protective cutting mats are made with a 3 ply resilient vinyl that heals so completely it can be used as a writing/drawing surface, even over previous cut lines. Cutting mats are recommended for calligraphers, designers, photographers, or anyone who has a desktop to protect. The translucent cutting mat provides a protective surface for lightboxes, as well as tabletops. Mats are marked with a ½\" grid pattern with cutting angles and ¼\" gradations on the base and left hand vertical edge. Non-slip, non-glare. Green/Black mats are double sided with grids printed on both sides.'),(2,'Cricut Maker',34999,'/images/cricut-maker.jpg','The ultimate in professional-level cutting performance and versatility','Meet Cricut Maker, the ultimate smart cutting machine. With the ability to use more advanced tools, Cricut Maker gives you the freedom to make virtually any DIY project you can imagine, from 3D art to home decor, jewelry, iron-on, vinyl, paper projects, and so much more. It has the tools to cut hundreds of materials quickly and accurately, from the most delicate paper and fabric to the tough stuff like matboard, leather, and basswood. Use the Rotary Blade to cut fabric for a sewing project — without backing material. Switch to Knife Blade (sold separately) and cut thicker and denser materials for added dimension and depth. Or quickly switch between scoring, engraving, debossing, and other decorative effects with a variety of specialty tips (sold separately). Featuring unique cutting versatility, a huge library of design ideas, sewing patterns available instantly, and easy-to-use apps, Cricut Maker delivers professional-level cutting performance that anyone can use.'),(3,'Recollections Cardstock Paper',2074,'/images/cardstock.jpg','Assorted Colors 10 sheets of each color','Every paper crafter needs this basic pack of paper to create those special projects. This pack of assorted primary and related color cardstock paper is perfect for matting your favorite photos, making cards or just adding layers of color to any project. Indulge your passion for paper!\r\n\r\n'),(4,'Acrylic Paint Set',3250,'/images/paint-set.png','Winsor & Newton Professional Acrylic Sets','Unrivaled in brilliance, Winsor & Newton’s new line of Professional Acrylics combines a revolutionary transparent binder that eliminates color shift from wet to dry with the highest-quality, maximum-strength pigments to ensure clean, strong colors with wonderful working properties. Brilliance, defined as the richness, intensity and depth of a color, is possibly the most important quality of an acrylic paint. Consequently, in the development of Professional Acrylics, Winsor & Newton combined its world-beating color-making experience to ensure an unrivaled brilliance and depth of color in the range. Brilliance does not mean the colors are garish. Rather, it pertains to clarity and purity of color, which should be evident when the color is applied straight from the tube as well as in the thinnest of films. Even the earths, blacks, and whites are clean and not dull. Only the purest pigments are used in Professional Acrylics, formulated individually to ensure the the cleanest, brightest, and strongest colors to give a wider choice and better color-mixing capabilities. Each individual formulation uses the maximum amount of pigment possible — without extenders — to produce a brilliant color with the broadest handling properties.'),(5,'Brush Set',6499,'/images/brush-set.png','Da Vinci Wood Box Brush Set','These beautiful box sets from Da Vinci are made from top-quality birch wood and include a variety of brushes and tools to please any painter. These sets make perfect gifts for you or the artist in your life. Choose between Watercolor Brushes, Acrylic Brushes, or Oil Brushes.\r\n\r\nDa Vinci Wood Box Brush Sets are made in Germany.\r\n\r\nDa Vinci Acrylic Brushes Wood Box Set - This set includes four long handle Top Acryl Brushes, one each of Size 12 Bright, Size 8 Filbert, Size 8 Bright, and Size 4 Round. Also included are a free painting cloth and brush soap.'),(6,'Cricut Machine Mats',1999,'/images/machine-mats.jpg','Cut all the essentials, from delicate paper to heavier specialty materials','Cover all your cutting needs and save a good chunk of change with this variety pack of machine mats, which covers a wide range of cutting materials, from delicate paper to heavier specialty cardstock, vinyl, iron-on, and more. As the interface between your material and your Cricut machine, each reusable mat holds your material in place as it\'s cut, and makes it easy to cleanly remove finished pieces once a cut is complete. Each mat is formulated to ensure the best possible adhesion and the longest possible life. For use with Cricut Maker® and Cricut Explore® cutting machines.\r\n\r\nUse the LightGrip Mat for standard paper, light cardstock, and vellum; StandardGrip for heavy cardstock, iron-on, and vinyl; StrongGrip for specialty cardstock, matboard, backed fabric, and more.\r\n\r\nTips:\r\nKeep the clear film cover on the mat when storing to keep mat free from paper scraps and dust.\r\nUse the scraper to scrape away excess pieces and the spatula to carefully remove cut images.\r\nTo ensure best performance, use the recommended material types on the mats.'),(7,'Knife Blade + Drive Housing',4599,'/images/knife-blade.jpg','Cut more, make more. Get precise cuts through thicker or denser materials such as balsa wood, leather, craft foam, and more.','Expand your creative horizons with the powerful Knife Blade + Drive Housing. Made exclusively for Cricut Maker and its Adaptive Tool System™, Knife Blade slices through thicker and denser materials such as balsa wood, leather, matboard, and Cricut Chipboard with ease and precision. Perfect for projects with extra dimension like puzzles, dinosaur skeletons, models, leather goods, dioramas, wood decor, and so much more. For more info on blade calibration, cutting times, materials, and more, visit help.cricut.com/knifeblade.\r\n\r\nDue to longer cut times requiring Bluetooth™ connection, Knife Blade projects are not compatible with iOS and Android devices.\r\n\r\nTo ensure successful cuts, always turn off Sleep Mode on your computer before starting a cut. If Bluetooth connection is broken (which happens when your computer goes to sleep or if you travel out of range), you run the risk of completely starting over.\r\n\r\nKnife Blade + Drive Housing includes:\r\n\r\n1 – Knife Blade Drive Housing \r\n1 – Knife Blade \r\n1 – Blade changing instruction sheet'),(8,'Scoring Wheel Combo Pack',6999,'/images/scoring-wheel.jpg','Creates extra-deep score lines for perfect folds and a flawless finish on both thick and thin materials','Everything you need. This combo pack includes two professional-quality scoring wheels that give you extra-deep score lines and a flawless finish on everyday and specialty material projects. Break creative barriers and make more than ever before with the Cricut Scoring Wheel Combo Pack. From flawlessly finished tags, cards, and gift boxes to jaw-dropping wearable art, 3D home decor, structures, and more, you’ll bring pro-level precision to every possible score-and-fold project. Get crisp creases in one pass. Make perfect, effortless folds. Rejoice in that flawless finish. With up to 10X more pressure than the Scoring Stylus, the patented wheel design takes on thin, thick, and even coated paper materials with ease. Includes Scoring and Double Scoring Wheel Tips and QuickSwap™ Housing for interchangeable tool use.'),(9,'Premium Vinyl Black - Bulk',5999,'/images/black-vinyl.jpg','Permanent adhesive lasts up to 3 years ','Go ahead, take it outside! Every project goes smoothly when you use Permanent Premium Vinyl. This amazing vinyl lies flat on your cutting mat – no tunneling or bubbling. Cut your design, weed with ease, and apply with awe. Even your most intricate designs effortlessly separate from the carrier sheet for a perfect application. Water-resistant and UV-resistant, Permanent Premium Vinyl lasts up to three years, even in the great outdoors. For use with all Cricut cutting machines.'),(10,'Pearl Metallic Sampler Vinyl',1699,'/images/pearl-vinyl.jpg','3 sheets 12\" x 24\" in Blue, Green, Orange. Permanent adhesive lasts up to 3 years','Turn up your creative heat with this vinyl sampler featuring a metallic pearl finish. And go ahead, take it outside! Every project goes smoothly when you use Permanent Premium Vinyl. This amazing vinyl lies flat on your cutting mat – no tunneling or bubbling. Cut your design, weed with ease, and apply with awe. Even your most intricate designs effortlessly separate from the carrier sheet for a perfect application. Water-resistant and UV-resistant, Permanent Premium Vinyl lasts up to three years, even in the great outdoors. For use with all Cricut cutting machines.'),(11,'Holographic Iron-On Vinyl',1999,'/images/holographic-iron-on.jpg','Easily adheres to most materials to reveal a lustrous, multicolor finish.','Bring on the spice! This luminous holographic iron-on material brings a sense of wonder to every creation. Intricate designs are simple to cut with your Cricut machine, and you’ll weed with ease to prep for flawless application. Create unique fashion that\'s so you, and add brilliant accents to party and home decor. Fun and reflective shapes, logos, and phrases are all a cut and a press away with this easy heat transfer material. Turn heads by adding eye-catching shine to pillows, blankets, basket liners, wall-hangings – and that\'s just the beginning. For use with all Cricut cutting machines. For a flawless iron-on application, use Cricut EasyPress™. Or apply with household iron.\r\n\r\nCare Instructions\r\n\r\nApply to pre-washed and fully dried materials only\r\nAllow 24 hours after application before washing.\r\nHand wash inside out in cold water, hang to dry.\r\nDo not bleach.\r\nIf you need to iron, only iron on the backside of the garment.'),(12,'Cricut EasyPress',20999,'/images/easy-press.jpg','Professional heat-transfer results without the guesswork','Your everyday iron-on essential. Now with adjustable heat up to 400℉ (205°C), Cricut EasyPress 2 is your no-stress heat press. Combining the speed of a heat press and the convenience of an iron, Cricut EasyPress 2 gives you fast, effortless results that really last, even after repeated washes. Eliminate guesswork with rigorously tested time and temperature settings for every project, apply heat, and when the beep sounds, you’re done! Helpful safety features include an insulated Safety Base and auto-shutoff feature. Cricut EasyPress 2 is lightweight, portable, easy to store, and compatible with most major brands of heat-transfer vinyl and all Infusible Ink™ products. And of course, it’s a perfect complement to Cricut cutting machines.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-20 23:59:35
