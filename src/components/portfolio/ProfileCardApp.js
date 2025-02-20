import './ProfileCardApp.css';

function ProfileCardApp() {
    return (
        <div className='Profile-card'>
            <div className='Profile-card-align'>
                <div className='Profile-photo'></div>
                    <div className='Profile-name'> Emiliano Quintero</div>
                    <div className='Profile-title'>Web Developer</div>
                    <div className='Profile-social'>
                    <a href='/'>GitHub</a>
                    <a href='/'>Linkln</a>
                    <a href='/'>Spotify</a>
                    </div>
                    <div className='Profile-card-bottoms'>
                    <a href='/'>Downald CV</a>
                    <a href='/'>Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCardApp;