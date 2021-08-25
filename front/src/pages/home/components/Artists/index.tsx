import React from 'react';
import styles from './styles.module.scss';
import perfil from '../../../../asserts/img/perfil.png';
import arte1 from '../../../../asserts/img/arte1.png';
import arte2 from '../../../../asserts/img/arte2.png';
import arte3 from '../../../../asserts/img/arte3.png';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import paint from '../../../../asserts/img/paint.png';
import rightArrow from '../../../../asserts/img/rightArrow.png';

interface ArtistProps {
  id: number;
  profile: string;
  arts: string[];
  name: string;
  artType: string;
}

const artist = [
  {
    id: 0,
    profile: perfil,
    arts: [arte1, arte2, arte3],
    name: 'Mauro Andrade',
    artType: 'Arte moderna',
  },
  {
    id: 1,
    profile: perfil,
    arts: [arte1, arte2, arte3],
    name: 'Mauro Andrade',
    artType: 'Arte moderna',
  },
];

export function Artists() {
  const renderCard = (artist: ArtistProps) => {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardProfile}>
          <div className={styles.cardProfileContent}>
            <div className={styles.yellowCircle} />
            <div className={styles.redCircle} />
            <div className={styles.purpleSquare} />
            <div className={styles.profileImage}>
              <Image
                boxSize='175px'
                objectFit='cover'
                src={artist.profile}
                alt='Perfil'
              />
            </div>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.profileInfo}>
            <p>{artist.name}</p>
            <div>
              <Image boxSize='30px' objectFit='cover' src={paint} alt='Paint' />
              <p>{artist.artType}</p>
            </div>
          </div>
          <div className={styles.profileContentImages}>
            <Image
              boxSize='160px'
              objectFit='cover'
              src={artist.arts[0]}
              alt='Arte1'
            />
            <Image
              boxSize='160px'
              objectFit='cover'
              src={artist.arts[1]}
              alt='Arte2'
            />

            <Link to="/artista">
              <Image
                boxSize='25px'
                objectFit='cover'
                src={rightArrow}
                alt='Arrow'
              />
              <p>Ver mais</p>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Artistas Recomendados</h2>
      </div>
      <div className={styles.content}>
        {renderCard(artist[0])}
        {renderCard(artist[1])}
        <div className={styles.pageArtistButton}>
          <button>
            <p>Mais artistas</p>
            <Image
              boxSize='25px'
              objectFit='cover'
              src={rightArrow}
              alt='Arrow'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artists;
