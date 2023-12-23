import Image from "next/image";
import { Hero } from "@/components/hero/hero";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { BulletList } from "@/components/bullet-list/bullet-list";
import { Button } from "@/components/button/button";
import { Tags } from "@/components/tags/tags";
import { Card } from "@/components/card/card";
import { GiftImage } from "@/components/gift-image/gift-image";
import heroImg from "../static/hero-3.jpg";
import giftImage from "../static/instagram.jpg";
import styles from "../styles/index.module.css";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const year = new Date().getFullYear();
  return (
    <main className={styles.main}>
      <Hero
        title="Mini Festive Component Library"
        backgroundImage={heroImg.src}
        textTheme="light"
      />
      <div className={styles.wrapper}>
        <Breadcrumb
          links={[{ label: "Home", url: "/" }, { label: "Welcome" }]}
        />

        <h2 className={`${styles.heading} ${styles["main-heading"]}`}>
          How can I use the festive component library?
        </h2>
        <section className={styles.grid}>
          <Card
            title="Clone repo from GitHub"
            description="Clone the repo which includes all the components from GitHub."
            icon="gift"
            iconBg="secondary"
            cta={{
              label: "GitHub Repo",
              url: "#",
            }}
          />
          <Card
            title="Build your pages"
            description="Run the app locally and build your pages. Repo includes Next.js setup with this sample page."
            icon="snowflake"
          />
          <Card
            title="Publish the results"
            description="Pick your hosting provider (Vercel offers a free tier for Next.js projects) and share it with the world!"
            icon="star"
            iconBg="accent"
          />
        </section>
        <section className={styles.content}>
          <h2 className={`${styles.heading} ${styles["tou-heading"]}`}>
            Terms of Use
          </h2>
          <BulletList
            items={[
              "You are welcome to use these components for any personal, non-commercial projects",
              "You can fork and modify/expand the components as you wish",
              "A credit link back to lubna.dev would be appreciated",
            ]}
            marker="candy-cane"
            markerFill="secondary"
          />
        </section>

        <section className={styles.blurb}>
          <GiftImage src={giftImage.src} width="280px" />
          <div>
            <h2 className={styles.heading}>Want more tips & tricks?</h2>
            <p>
              This mini component library was built as part of a Codemas 2023
              challenge on Instagrm. If you are looking for more tips, tricks
              and tutorials on HTML, CSS, JavaScript and all things Front-end
              you can follow{" "}
              <a href="https://www.instagram.com/lubnadev/" target="_blank">
                LubnaDev
              </a>{" "}
              on Instagram.
            </p>
          </div>
        </section>
        <footer className={styles.content}>
          <Button as="button" onClick={scrollToTop}>
            Back to top
          </Button>
          <Tags
            tags={[
              { label: `© ${year}` },
              { label: "LubnaDev", theme: "secondary" },
              {
                label: "All rights reserved",
                icon: "star",
                theme: "primary",
                outlined: true,
              },
            ]}
          />
          <a href="https://lubna.dev">
            Visit lubna.dev for more developer articles & content
          </a>
        </footer>
      </div>
    </main>
  );
}
