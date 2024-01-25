import React from 'react'

type Props = {}

const AboutPageComponent = (props: Props) => {
  return (
    <main className="About-Page Main-Element Main-Padding flex flex-col gap-y-8">
      <div className="Page-Title">who am i.</div>

      <div className="text-lg">
        First of all, Hello Mate! My name is Emre and I'm 23 years old. I live
        in{' '}
        <a
          href="https://goo.gl/maps/cadu4sCBbzi4B6F98"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Ankara/Turkey
        </a>
        . In the last years of secondary school, my interest in the world of
        informatics started. I've been learning since then. I'm working to be an
        experienced developer. In this profession, I'm open to learning and
        improving myself. I enjoy learning new things and constantly improving
        myself.
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="text-sm text-zinc-600">
          What I like to do and my hobbies are:
        </div>

        <div className="flex flex-col gap-y-4">
          <div>
            I love watching Movies and TV Series. And I like to talk to people
            about them. If you want to see the movies I watched and my watch
            list:{' '}
            <a
              target="_blank"
              href="https://letterboxd.com/Wiazeph/"
              rel="noopener noreferrer"
              className="Main-Link"
            >
              My Letterboxd Account
            </a>
          </div>

          <div>
            I love playing computer games since childhood. It's something I can
            never give up. If you are interested in games, you can check{' '}
            <a
              target="_blank"
              href="https://steamcommunity.com/id/Wiazeph"
              rel="noopener noreferrer"
              className="Main-Link"
            >
              My Steam Account
            </a>{' '}
            for the games I play and add me as a friend.
          </div>

          <div>
            Also, I have to say that finding new songs and creating playlists on
            Spotify are among my hobbies. You can check{' '}
            <a
              target="_blank"
              href="https://open.spotify.com/user/gb0jo18xvox7w4gmijbj3l301?si=089ed329e6da4203"
              rel="noopener noreferrer"
              className="Main-Link"
            >
              My Spotify Account
            </a>{' '}
            for playlists.
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPageComponent
