import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Release} from '../../entities/entities'
export interface AudioPlayerState {
  
  isPlaying: boolean;
  audioSrc: string;
  release: Release | null
  isHidden: boolean;
}

const initialState: AudioPlayerState = {
  
  isPlaying: false,
  audioSrc: '',
  release: null,
  isHidden: true
};


export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
    playOrPause: (state) => {
        
      state.isPlaying = !state.isPlaying;
    },

    updateAudioSrc: (state, action: PayloadAction<string>) => {
        state.audioSrc = action.payload;
        
      },

    updateTheInfoOfTheReleaseThatIsBeingPlayedInsideOurPlayerRn:(state, action: PayloadAction<Release>)=>{
        state.release = action.payload
    },
    updateIsHidden: (state, action: PayloadAction<boolean>) => {
        state.isHidden = action.payload;
        
      },
  },
});

export const { playOrPause, updateAudioSrc, updateTheInfoOfTheReleaseThatIsBeingPlayedInsideOurPlayerRn, updateIsHidden } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
