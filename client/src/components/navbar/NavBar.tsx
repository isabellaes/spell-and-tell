import { Link } from "react-router";
import styles from "./navbar.module.scss";
import profileImage from "../../assets/profile.jpg";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { useEffect, useState } from "react";
import { User } from "../../utils/types";

type NavBarProps = {
  user: User;
};


const NavBar = ({user}: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = [
    {
      title: user.username,
      img: (
        <img
          src={profileImage}
          alt="Profile"
          width={45}
          height={45}
          className={styles.img}
        />
      ),
      path: "profile",
    },
    { title: "Utforska berättelser", 
        icon: <AutoStoriesOutlinedIcon/>,
        path: "/storys" },
    {
      title: "Skapa ny berättelse",
      icon: <AddCircleOutlineIcon/>,
      path: "/createstory",
    },
  ];

  return (
    <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.center}>
        {navList.map((l, index) => (
          <Link className={styles.links} key={index} to={l.path}>
            <p>{l.img}</p>
            <p className={`${styles.icon}`}>{l.icon}</p>
            <p>{l.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
