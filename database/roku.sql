-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 11, 2020 at 01:02 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `media_id` mediumint(8) UNSIGNED NOT NULL,
  `movie_cover` varchar(75) NOT NULL,
  `movie_title` varchar(125) NOT NULL,
  `movie_year` varchar(5) NOT NULL,
  `movie_runtime` varchar(25) NOT NULL,
  `movie_storyline` text NOT NULL,
  `movie_trailer` varchar(75) NOT NULL,
  `movie_release` varchar(125) NOT NULL,
  `age_appropriateness` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`media_id`, `movie_cover`, `movie_title`, `movie_year`, `movie_runtime`, `movie_storyline`, `movie_trailer`, `movie_release`, `age_appropriateness`) VALUES
(1, 'cinderella_1950.jpg', 'Cinderella', '1950', '1h 16m', 'When Cinderella\'s dream of attending the Royal Ball and meeting the Grand Duke is hindered by her cruel stepmother, she gets some astounding help from her Fairy Godmother.', '1_CinderellaTrailer(1950).mp4', '‎February 15‎, ‎1950', 'G'),
(2, 'peter_pan_1950.jpg', 'Peter Pan', '1953', '1h 16m', 'In this magical tale about the boy who refuses to grow up, Peter Pan and his mischievous fairy sidekick Tinkerbell visit the nursery of Wendy, Michael, and John Darling.', 'peter_pen_1953.mp4', 'February 5, 1953', 'G'),
(3, 'toby_tyler_1960.jpg', 'Toby Tyler', '1960', '1h 36m', 'Little orphan Toby Tyler (Kevin Corcoran) runs away to join a traveling circus following a quarrel with his foster parents, Aunt Olive (Edith Evanson) and Uncle Daniel (Tom Fadden). Under the big top, Toby is exposed to a magical new world that includes a wacky chimpanzee named Mr. Stubbs. But the boy\'s friendship with paternal candy seller Harry Tupper (Bob Sweeney) is considerably less endearing -- especially when Tupper starts showing his mean-spirited true colors.', 'Toby Tyler_1960.mp4', 'January 21, 1960', 'G'),
(4, 'swiss_family_robinson_1960.jpg', 'Swiss Family Robinson', '1960', '2h 6m', 'In this family film, the Robinson clan -- mother (Dorothy McGuire), father (John Mills) and their three sons, Fritz, Ernst and Francis -- flee the reign of Napoleon to start afresh in New Guinea. When their ship gets damaged en route, the family takes refuge on a deserted island. The Robinsons learn to live in the wild, have various adventures and build an impressive house in a tree. However, while island life is full excitement, the question of whether to return to civilization looms.', 'Swiss Family Robinson 1960 Trailer .mp4', 'December 10, 1960', 'G'),
(5, 'the_witches_1990.jpg', 'The Witches', '1990', '1h 32m', 'A young boy stumbles onto a group of witch\'s convention and tries to stop them, as they prepare to rid the world of all children, even after they turn him into a mouse.', 'The Witches (1990) .mp4', 'May 25, 1990', 'G'),
(6, 'problem_child_1990.jpg', 'Problem Child', '1990', '1h 21m', 'Ben Healy and his wife decide to adopt Junior, a seven-year-old boy, when they are unable to conceive. Soon, Junior reveals his mischievous nature that drives his adoptive parents crazy.', 'ProblemChild(1990).mp4', 'July 27, 1990', 'G'),
(7, 'home_alone_1990.jpg', 'Home Alone', '1990', '1h 43m', 'Eight-year-old Kevin is accidentally left behind when his family leaves for France. At first, he is happy to be in charge, but when thieves try to break into his home, he tries to put up a fight.', 'HomeAlone_1990.mp4', ' November 16, 1990', 'G'),
(8, 'duck_tales_1990.jpg', 'DuckTales the Movie: Treasure of the Lost Lamp', '1990', '1h 14m', 'Scrooge McDuck and his nephews Huey, Dewey and Louie travel to Egypt in search of a magic lamp, which is also desired by an evil sorcerer Murlock and his sidekick Dijon.', 'DuckTales The Movie - Treasure of the Lost Lamp_1990.mp4', ' August 3, 1990', 'G'),
(9, 'the_little_mermaid_1980.jpg', 'The Little Mermaid', '1989', '1h 45m', 'A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince\'s love.', 'The Little Mermaid (1989) .mp4', '17 November 1989', 'G'),
(10, 'railway_children_1970.jpg', 'The Railway Children', '1970', '1h 50m', 'After Charles Waterbury (Iain Cuthbertson) is imprisoned on false charges of selling state secrets, his wife (Dinah Sheridan) must move to a small house near a railway station. The Waterbury children -- Bobbie (Jenny Agutter), Phyllis (Sally Thomsett) and Peter (Gary Warren) -- occupy themselves watching the trains, even befriending a gentleman (William Mervyn) who frequents the station. When the children discover what has happened to their father, their new friend provides key assistance.', 'The Railway Children_1970.mp4', 'October 28, 1971', 'G'),
(11, 'aristocats_1970.jpg', 'The Aristocats', '1970', '1h 19m', 'A retired old lady, living a lavish life in Paris, wills all her possessions to her four cats. The greedy butler kidnaps the cats, but a bunch of retired army dogs and a stray cat stand in his way.', 'Disney\'s The Aristocats_1970.mp4', 'December 11, 1970', 'G'),
(12, 'all_dogs_go_to_heaven_1980.jpg', 'All Dogs Go to Heaven', '1989', '1h 24min', 'A canine angel, Charlie, sneaks back to earth from heaven but ends up befriending an orphan girl who can speak to animals. In the process, Charlie learns that friendship is the most heavenly gift of all.', 'All Dogs Go to Heaven (1989) HD.mp4', '17 November 1989', 'G'),
(13, 'all_about_eve_1950_adult.jpg', 'All About Eve', '1950', '2h 18min ', 'An ingénue insinuates herself into the lives of an established but aging stage actress and her circle of theater friends.', 'All About Eve (1950).mp4', '27 October 1950', 'PG'),
(14, 'sunset_boulevard_1950_adult.jpg', 'Sunset Boulevard', '1950', '1h 50min', 'A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.', 'Sunset Boulevard_1950.mp4', '29 September 1950', 'PG'),
(15, 'psycho_1960_adult.jpg', 'Psycho', '1960', ' 1h 49min ', 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.', 'Psycho_(1960) .mp4', '8 September 1960', '18A'),
(16, 'apartament_1960.jpg', 'The Apartment', '1960', '2h 5min', 'A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.', 'The Apartment_1960.mp4', ' 16 September 1960', 'PG'),
(17, 'mash_1970_adult.jpg', 'M.A.S.H.', '1970', ' 1h 56min', 'The staff of a Korean War field hospital use humor and high jinks to keep their sanity in the face of the horror of war.', 'M*A*S*H _(1970).mp4', '18 March 1970', 'PG'),
(18, 'patton_1970_adult.jpg', 'Patton', '1970', ' 2h 52min ', 'The World War II phase of the career of controversial American general George S. Patton.', 'Patton Theatrical Movie_1970.mp4', ' 2 April 1970', '14A'),
(19, 'shining_1980_adult.jpg', 'The Shining', '1980', ' 2h 26min', 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.', 'The Shining [1980] .mp4', '13 June 1980 ', 'R'),
(20, 'the_empire_strikes_back_adult_1980.jpg', 'Star Wars: Episode V - The Empire Strikes Back', '1980', '2h 4min', 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.', 'Star Wars Episode V_ The Empire Strikes Back_1980.mp4', '20 June 1980 ', 'PG'),
(21, 'goodfellas_1990_adult.jpg', 'Goodfellas', '1990', '2h 26min ', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', 'Goodfellas(1990).mp4', '21 September 1990', '14A'),
(22, 'ghost_1990_adult.jpg', 'Ghost', '1990', '2h 7min ', 'After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.', 'Ghost(1990).mp4', '13 July 1990', 'PG'),
(23, 'dances_with_wolves_1990.jpg', 'Dances with Wolves', '1990', '3h 1min ', 'Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.', 'Dances With Wolves(1990).mp4', '21 November 1990', 'PG'),
(24, 'pretty_woman_1990_adult.jpg', 'Pretty Woman', '1990', '1h 59min ', 'A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.', 'Pretty Woman (1990).mp4', '23 March 1990', '14A');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

CREATE TABLE `tbl_music` (
  `music_id` int(11) NOT NULL,
  `music_cover` varchar(75) NOT NULL,
  `movie_title` varchar(125) NOT NULL,
  `movie_runtime` varchar(25) NOT NULL,
  `movie_storyline` text NOT NULL,
  `movie_trailer` varchar(250) NOT NULL,
  `movie_year` varchar(125) NOT NULL,
  `age_appropriateness` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_cover`, `movie_title`, `movie_runtime`, `movie_storyline`, `movie_trailer`, `movie_year`, `age_appropriateness`) VALUES
(1, 'wilson_phillips_1990.jpg', 'Wilson Phillips', '45min', 'Wilson Phillips is the debut album by American vocal group Wilson Phillips, released in 1990. Five singles were released from the album, with \"Hold On\", \"Release Me\" and \"You\'re in Love\" all hitting number one on the U.S. Billboard Hot 100 singles chart. \"Impulsive\" reached number four, and the fifth single \"The Dream Is Still Alive\" reached the top 20. The album has sold 5 million copies in the United States and over 10 million worldwide.', 'WilsonPhillipsHoldOn(1990).mp4', '1990', 'A&K'),
(2, 'wiggles_1990.jpg', 'The Wiggles ', '30min', 'A show geared for babies up to older toddlers. This show is full of music, teaching kids songs and easy dances.', 'GetReadyToWiggleOriginalMusicVideo.mp4', '1991', 'K'),
(3, 'temptations_1960.jpg', 'the Temptations - Meet the Temptations', '31min', 'Meet the Temptations is the debut studio album by the Temptations for the Gordy (Motown) label released in 1964. It includes most of the group\'s early singles, excluding only the first, \"Oh Mother of Mine\", and its b-side, \"Romance Without Finance\" (later included on a CD reissue of the LP); as well as the single \"Mind Over Matter\" (and its b-side \"I\'ll Love You Till I Die\"), in which the group is credited as The Pirates. ', 'TheTemptationsTheWayYouDoTheThingsYouDo.mp4', '1964', 'A&K'),
(4, 'Supremes_1950.jpg', 'The Supremes - Meet The Supremes', 'N/A', 'Meet the Supremes is the debut studio album by The Supremes, released in late 1962 on Motown. The LP includes the group\'s earliest singles: \"I Want a Guy\", \"Buttered Popcorn\", \"Your Heart Belongs to Me\" and \"Let Me Go the Right Way\". The earliest recordings on this album, done between fall 1960 and fall 1961, feature the Supremes as a quartet composed of teenagers Diane Ross, Mary Wilson, Florence Ballard, and Barbara Martin.', 'TheSupremes-Iwantaguy.mp4', '1962', 'A&K'),
(5, 'sesame street_1990.jpg', 'Sesame Street Music', '40min', 'A longtime favorite of children and adults, and a staple of PBS, \"Sesame Street\" bridges many cultural and educational gaps with a fun program. Big Bird leads a cast of characters teaching children numbers, colors and the alphabet. Bert and Ernie, Oscar the Grouch and Grover are just a few of the other creatures involved in this show, set on a city street full of valuable learning opportunities.', 'SesameStreet-MahnaMahna(1969).mp4', '1969', 'K'),
(6, 'rubber_duckie_1970.jpg', 'Rubber Duckie', '2min', '\"Rubber Duckie\" is a song sung by the Muppet character Ernie (voiced by Jim Henson) on Sesame Street. The song is named after Ernie\'s toy, a rubber duck affectionately named Rubber Duckie.', 'SesameStreetErniehisRubberDuckie.mp4', '1970', 'K'),
(7, 'hooley_dooleys_1990.jpg', 'Hooley Dooleys', '1hr', 'The Hooley Dooleys were an Australian children\'s music and performance act which began in 1996. Their material was aimed at children between the ages of two and seven. They originally appeared on the Australian Broadcasting Corporation, but then appeared on commercial television and as a live touring act.', 'HooleyDooleys-TickTock(1996).mp4', '1996', 'K'),
(8, 'bowie_1980.jpg', 'David Bowie - The Best of David Bowie', '1hr 17min', 'The Best of David Bowie 1980/1987 is a compilation album by David Bowie. The CD was originally released by EMI as part of The Platinum Collection in 2005/2006. The 2007 release is part of EMI\'s two-disc Sight & Sound series, each of which features a CD and DVD of material from the same artist. The DVD portion of the collection features two videos previously unreleased on DVD - \"When the Wind Blows\" and \"The Drowned Girl\".', 'DavidBowie-ScaryMonsters.mp4', '1980', 'A&K'),
(9, 'frank_sinatra_1950_adult.jpg', 'Sing and Dance with Frank Sinatra', '50min', 'Swing and Dance with Frank Sinatra is the sixth studio album by Frank Sinatra. ', 'Lover.mp4', '1950', 'A'),
(10, 'ac_dc_1980_adult.jpg', 'AC/DC - Back in Black', '42min', 'Back in Black is the seventh studio album by Australian rock band AC/DC. It was released on 25 July 1980 by Albert Productions and Atlantic Records. It is the band\'s first album to feature vocalist Brian Johnson, following the death of previous vocalist Bon Scott.', 'ACDC-BackInBlack.mp4', '1980', 'A'),
(11, 'beatles_1970_adult.jpg', 'The Beatles - Let It Be', '35min', 'Let It Be is the twelfth and final studio album by the English rock band the Beatles. It was released on 8 May 1970, almost a month after the group\'s break-up, in tandem with the motion picture of the same name. Like most of the band\'s previous releases, the album topped record charts in many countries, including both the US and the UK. However, the critical response was generally unfavourable, and Let It Be came to be regarded as one of the most controversial rock albums ever.', 'BeatlesLetItBe.mp4', '1970', 'A'),
(12, 'elvis_1960_adult.jpg', 'Elvis Presley - His Hand in Mine', '28min', 'His Hand in Mine is the fifth studio album by American singer and musician Elvis Presley, released on RCA Victor Records in mono and stereo, LPM/LSP 2328, in November 1960. It was the first of three gospel music albums that Presley would issue during his lifetime.', 'ElvisPresley-HisHandinMine.mp4', '1960', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_television`
--

CREATE TABLE `tbl_television` (
  `tv_id` int(11) NOT NULL,
  `television_cover` varchar(75) NOT NULL,
  `movie_title` varchar(125) NOT NULL,
  `movie_year` varchar(5) NOT NULL,
  `movie_runtime` varchar(25) NOT NULL,
  `movie_storyline` text NOT NULL,
  `movie_trailer` varchar(75) NOT NULL,
  `television_release` varchar(125) NOT NULL,
  `age_appropriateness` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_television`
--

INSERT INTO `tbl_television` (`tv_id`, `television_cover`, `movie_title`, `movie_year`, `movie_runtime`, `movie_storyline`, `movie_trailer`, `television_release`, `age_appropriateness`) VALUES
(1, 'tiny_toon_adventures_1990.jpg', 'Tiny Toon Adventures', '1990', '1h 20m', 'A new generation of young cartoon characters attends Acme Acres Looniversity, where they embark on a series of off-the-wall adventures while learning the basics of comedy from their Looney Tunes mentors. Popular characters include Buster Bunny, Babs Bunny, Plucky Duck, Hamton J. Pig, Fifi La Fume, Dizzy Devil, Calamity Coyote, Sweetie Bird, and two human characters, Elmyra Duff and Montana Max, who are regarded as the main villains of the series.', 'Tiny_Toon Adventures_Trailer_1991.mp4', 'September 14, 1990', 'G'),
(2, 'the_new_adventures_of_winnie_1980.jpg', 'The New Adventures of Winnie the Pooh', '1988', '30min', 'Follow Winnie the Pooh\'s adventures in the Hundred Acre Wood.', 'The_New_AdventuresofWinniethePoohIntro_1988.mp4', 'January 17, 1988', 'G'),
(3, 'mickey_mouse_club_1950.jpg', 'The Mickey Mouse Club', '1955', '1h', 'Mickey Mouse is the host of this variety show with a club attended by a variety of kids being the Mouseketeers. The usual content includes in-studio comedy and musical acts by those kids, classic as well as original cartoons and dramatic serials like \"Spin and Marty\" and \"The Hardy Boys.\"', 'The_MickeyMouseClub-OriginalMouseketeers.mp4', '17 July 1955', 'G'),
(4, 'heathcliff_1980.jpg', 'Heathcliff', '1980', '30m', 'Heathcliff is a 30-minute Saturday morning animated series based on the Heathcliff comic strip created by George Gately and produced by Ruby-Spears Productions. It premiered on ABC on October 4, 1980, with a total of 26 episodes produced under the titles Heathcliff and Dingbat and Heathcliff and Marmaduke.', 'Heathcliff(intro).mp4', 'October 4, 1980', 'G'),
(5, 'groovie_goolies_1970.jpg', 'Groovie Goolies', '1970', '1h', 'The adventures of the residents of a haunted boarding house for monsters.', 'GroovieGooliesOpeningTheme.mp4', '12 September 1970', 'G'),
(6, 'garfield_1980.jpg', 'Garfield and Friends', '1988', '30min', 'Stories about Garfield the cat, Odie the dog, their owner Jon and the trouble they get into, and Orson the Pig and his adventures on a farm with fellow farm animals.', 'Garfield_And_Friends.mp4', 'September 17, 1988', 'G'),
(7, 'flintstones_1960.jpg', 'The Flintstones', '1960', '30min', 'The Flintstones were the modern Stone Age family. Residing in Bedrock, Fred Flintstone worked an unsatisfying quarry job, but returned home to lovely wife Wilma and eventually daughter Pebbles. Fred, a big fan of golf and bowling, also enjoyed bullying neighbor Barney Rubble, while Barney\'s saucy wife Betty was best friends with Wilma. During the show\'s run, Barney and Betty would adopt an unnaturally strong son, Bamm-Bamm, who would become friends with little Pebbles.', 'The_Flintstones1960-1966.mp4', '29 October 1964', 'G'),
(8, 'alvin_and_the_chipmunks_1980.jpg', 'Alvin & the Chipmunks', '1983', '30min', 'Three chipmunk brothers, Alvin, Simon, and Theodore. The trio have been adopted by and are living with Dave (human). Each show finds the boys getting into trouble and new and unusual situations.', 'TheChipmunksTheme_SongIntro.mp4', '17 September 1983', 'G'),
(9, 'jack_benny_show_1950_adult.jpg', 'The Jack Benny Program', '1950', '30min', 'The comic misadventures of the \"skinflint\" comedian and his friends.', 'JackBennyProgramThe1950.mp4', '28 October 1950', 'PG'),
(10, 'andy_1960_adult.jpg', 'The Andy Griffith Show', '1960', '30min', 'Widower Sheriff Andy Taylor, and his son Opie, live with Andy\'s Aunt Bee in Mayberry, North Carolina. With virtually no crimes to solve, most of Andy\'s time is spent philosophizing and calming down his cousin Deputy Barney Fife.', 'Barney\'sSelfDefenseLessonsTheAndyGriffithShowTVLand.mp4', '3 October 1960', 'PG'),
(11, 'mary_tyler_moore_1970_adult.jpg', 'Mary Tyler Moore', '1970', '30min', 'The lives and trials of a young single woman and her friends, both at work and at home.', 'TheMaryTylerMooreShow1970.mp4', '19 September 1970', 'PG'),
(12, 'cheers_1980_adult.jpg', 'Cheers', '1982', '22min', 'The regulars of the Boston bar \"Cheers\" share their experiences and lives with each other while drinking or working at the bar where everybody knows your name.', 'Cheers.mp4', ' 30 September 1982', 'PG'),
(13, 'twin_peaks_1990_adult.jpg', 'Twin Peaks ', '1990', '47min', 'An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.', 'TwinPeaksSeriesTrailer.mp4', '8 April 1990', 'PG'),
(14, 'fresh_prince_of_bel-air_1990_adult.jpg', 'The Fresh Prince of Bel-Air ', '1990', '22min', 'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', 'TheFreshPrinceofBelAir.mp4', '10 September 1990', 'PG'),
(15, 'law_order_1990_adult.jpg', 'Law & Order ', '1990', '45min', 'Follows a crime (usually a murder), usually adapted from current headlines, from two separate vantage points, the police investigation and the prosecution in court.', 'Law&Order.mp4', '13 September 1990', 'PG'),
(16, 'beverly_hills_90210_adult.jpg', 'Beverly Hills, 90210 ', '1990', '44min', 'A group of friends living in Beverly Hills, California make their way through life from their school days into adulthood.', 'BeverlyHills90210.mp4', '4 October 1990', 'PG');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_avatar` varchar(20) NOT NULL,
  `user_permissions` int(11) NOT NULL,
  `user_admin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(1, 'Alisa', 'Mom', 'Boss', 'mom@gmail.com', '2020-03-09 15:48:21', '::1', 'mom.jpg', 5, 1),
(2, 'Emily', 'Emily', 'baby', 'kid@gmail.com', '2020-03-09 15:49:04', 'no', 'girl.jpg', 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_year`
--

CREATE TABLE `tbl_year` (
  `year_id` tinyint(3) UNSIGNED NOT NULL,
  `year_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_year`
--

INSERT INTO `tbl_year` (`year_id`, `year_name`) VALUES
(1, '1950'),
(2, '1960'),
(3, '1970'),
(4, '1980'),
(5, '1990');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_year_media`
--

CREATE TABLE `tbl_year_media` (
  `year_media_id` mediumint(9) UNSIGNED NOT NULL,
  `media_id` mediumint(9) NOT NULL,
  `year_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_year_media`
--

INSERT INTO `tbl_year_media` (`year_media_id`, `media_id`, `year_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 5, 5),
(6, 6, 5),
(7, 7, 5),
(8, 8, 5),
(9, 9, 4),
(10, 10, 3),
(11, 11, 3),
(12, 12, 4),
(13, 13, 1),
(14, 14, 1),
(15, 15, 2),
(16, 16, 2),
(17, 17, 3),
(18, 18, 3),
(19, 19, 4),
(20, 20, 4),
(21, 21, 5),
(22, 22, 5),
(23, 23, 5),
(24, 24, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_year_music`
--

CREATE TABLE `tbl_year_music` (
  `year_music_id` mediumint(9) UNSIGNED NOT NULL,
  `music_id` mediumint(9) NOT NULL,
  `year_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_year_music`
--

INSERT INTO `tbl_year_music` (`year_music_id`, `music_id`, `year_id`) VALUES
(1, 1, 5),
(2, 2, 5),
(3, 3, 2),
(4, 4, 2),
(5, 5, 2),
(6, 6, 3),
(7, 7, 5),
(8, 8, 4),
(9, 9, 1),
(10, 10, 4),
(11, 11, 3),
(12, 12, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_year_tv`
--

CREATE TABLE `tbl_year_tv` (
  `year_tv_id` mediumint(9) UNSIGNED NOT NULL,
  `tv_id` mediumint(9) NOT NULL,
  `year_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_year_tv`
--

INSERT INTO `tbl_year_tv` (`year_tv_id`, `tv_id`, `year_id`) VALUES
(1, 1, 5),
(2, 2, 4),
(3, 3, 1),
(4, 4, 4),
(5, 5, 3),
(6, 6, 4),
(7, 7, 2),
(8, 8, 4),
(9, 9, 1),
(10, 10, 2),
(11, 11, 3),
(12, 12, 4),
(13, 13, 5),
(14, 14, 5),
(15, 15, 5),
(16, 16, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`media_id`);

--
-- Indexes for table `tbl_music`
--
ALTER TABLE `tbl_music`
  ADD PRIMARY KEY (`music_id`);

--
-- Indexes for table `tbl_television`
--
ALTER TABLE `tbl_television`
  ADD PRIMARY KEY (`tv_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_year`
--
ALTER TABLE `tbl_year`
  ADD PRIMARY KEY (`year_id`);

--
-- Indexes for table `tbl_year_media`
--
ALTER TABLE `tbl_year_media`
  ADD PRIMARY KEY (`year_media_id`);

--
-- Indexes for table `tbl_year_music`
--
ALTER TABLE `tbl_year_music`
  ADD PRIMARY KEY (`year_music_id`);

--
-- Indexes for table `tbl_year_tv`
--
ALTER TABLE `tbl_year_tv`
  ADD PRIMARY KEY (`year_tv_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `media_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tbl_music`
--
ALTER TABLE `tbl_music`
  MODIFY `music_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_television`
--
ALTER TABLE `tbl_television`
  MODIFY `tv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_year`
--
ALTER TABLE `tbl_year`
  MODIFY `year_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_year_media`
--
ALTER TABLE `tbl_year_media`
  MODIFY `year_media_id` mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tbl_year_music`
--
ALTER TABLE `tbl_year_music`
  MODIFY `year_music_id` mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_year_tv`
--
ALTER TABLE `tbl_year_tv`
  MODIFY `year_tv_id` mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
