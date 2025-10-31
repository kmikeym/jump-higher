# Audio Files

## Current Audio

**File**: jump-higher-training.mp3
- **Size**: 255KB
- **Duration**: ~2 minutes
- **Format**: MP3, 128kbps
- **Status**: Live on production site (https://jumphigher.horse)
- **Purpose**: Daily motivational training using "inner rider" methodology

## Adding New Audio Files

If you need to add or replace the audio file:

### 1. Format Requirements
- **Format**: MP3
- **Bitrate**: 128kbps or 192kbps
- **Max size**: 10MB (for fast download)
- **Recommended duration**: 2-15 minutes

### 2. File Naming
- Use descriptive names: `jump-higher-training.mp3`
- For multiple versions: `jump-higher-v2.mp3`

### 3. Update References
After adding a new audio file:
1. Edit `thank-you.html` to point to the new filename
2. Test the audio player functionality locally
3. Commit and push to trigger deployment

### 4. Add to Git
```bash
# Force add the audio file (it's in .gitignore by default)
git add -f assets/audio/your-new-audio.mp3
git commit -m "Add new audio file"
git push
```

## Git Configuration

**Important**: Unlike many projects, audio files in this directory ARE tracked in git for deployment purposes.

- The `.gitignore` file excludes `assets/audio/*.mp3` by default
- Use `git add -f` to force-add audio files
- Current file (255KB) is small enough to include in repository
- For larger files (>5MB), consider using Git LFS or external hosting

## Usage in Production

The audio file is referenced in:
- `thank-you.html` (line 93): `<source src="assets/audio/jump-higher-training.mp3">`
- `thank-you.html` (line 97): Download link

If you change the filename, update both references.
