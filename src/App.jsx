// src/App.jsx
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useSheetStore } from './store';
import { TopicItem } from './components/TopicItem';
import { Plus, Terminal } from 'lucide-react';

function App() {
  const { data, reorder, addTopic } = useSheetStore();

  const handleDragEnd = (result) => {
    reorder(result);
  };

  const handleAddTopic = () => {
    const name = prompt("Enter topic name:");
    if(name) addTopic(name);
  };

  return (
    <div className="min-vh-100 py-5">
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 border-bottom border-secondary pb-4">
          <div className="d-flex align-items-center gap-3">
            <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhAQEBAWEBAVGRUbGRUVGRcQEBAgIB0iIiAdHx8kKDQkJCYxJx8fLTItMTMuMDAwIys1OD8uNzQuMC4BCgoKDg0OFxAQGC4eGBorLTc3Nys3Nys3NysrLjctLS0rNzc1MDc3Nzc3NTMzLS8yNzctNzcrKzgtKys3Ny0rK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgUHAwQIAgH/xABDEAABAwICBgcFBwIFAwUAAAABAAIDBBEFIQYSMUFRYQcTInGBkaEyQlKxwRQjYpLR4fBDcjNTgrLxFlSiFRckJTT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/8QALBEAAgIBAwIGAQMFAAAAAAAAAAECAxEEITESQRMUIjJRYQVxobEVM0KR0f/aAAwDAQACEQMRAD8AvFCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIA+KLwvSCkqJJYoJmySRGz2i41c7bxmOYuFu102pHI/4Wud5C65s0Q0gfR1cdSLubciQfG0+0O/f3gKEpYaGQh1JnTaFgoqpkrGSxuD43gOa4bHArOpiwQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgD4ovGdIKSlMYqZmxGQ2be51vIZDMZnJSE8zWNc97g1jQS5xyDQNpK5u060iNdVSTC4hb2IwdzRsPecz/woylgnCHUzpZCj8AqDJTUsh2viicfFoKFIgzNiUJfDKwbXMePMELnLRuiZNHUQvyPYLTvac810JpFjDKSnlqpAXNjA7LfadcgAeZC56w3FI21skjAY4ZXPsDtYHG4HgbBVdUn0bclzSY6t+Bl0E0xkw2Q0dZc0pORHaMN/ebxad4/cG7KSpZIxskbxIxwuHNN2uHeqZxPDY526sgzGxw9pqh8NxDEcLcXQO6yC9y0gvhd3t908x5pOn1iksS5G6jSNPMToVfFXeD9LlC9hNS19PIBewBlY/k0j6gd6Xce6YJ3Eto4WxN3Pk7ch529kf+Su9aKKrk3jBcy8ueBtIHfkuZ6/SrEZ79bVykHcHGNn5W2CiHhzjdxueJNyueIOWmkzq5kzTscD3EFe1yZ1RW5S4nVxf4VRLH/ZI5nyKPE+gelkdUIXPOGdJWKQ2vMJmj3ZWh3qLO9U74F0wU77Nq4XQH42fex95HtD1XVNC5VSRZ6FGMx+kMP2kVMfUf5msNUcjz5bUj470vUsd20kTqh3xu+6i8PePkFJySIKLfBZSFz5ifSbik1w2VsDTuiaB6m7vVLtXi1XL/i1Msn98j3fMqHifA2OnkzqJ8zRtcB3kBfWSA7CD3G65PMRX1jXA3BseINiueI/gn5WR1ihcx0Gk+IwW6qrmaBuLy9n5TcJywLpfqWENrImzt3vZ91KOdvZPouqxdxcqJIupY55msa573BjGi5c46rWjiSkDE+lygZGHQNknkIvqW6oM5OJ+l0gYrjGJYofvHdVTXuGC7IR4bXnv9Fyd0YLLYV0Tm8JErp/ps+ud9hob/Z79p2wz2+TB6pX0hoWwQQxDNxcS4/EQPlmmfCsKjgbZgu47XH2nJV0gr431TNa7oYy0OA2uz7Vvl4LPje7rVj2o0fBVVf2zobRuEspKRh2thhB8GBCxaLY5HWU0dTGxzGuuNV21pBsULURkPk9aVYb9ppKmnHtPY4N/uGbfUBc34ZhRmL2NcGSt912V+PcQupVTHShovJSz/8AqVKPunuvIB/ScdpP4XfM8wlXRk4+nksaeaUsPg84bC9kUbJHazwLErZUfhGLRztu02ePaado/ZSC89NNSeeTdi00sEXXYBTy3JZqO4s7J/RQlTog8ZxSh3Jw1T5hN6EyGosjwyMqYS7FfT4JVs2xlw4ts/5ZrQc4g2c0g8DkVaCxz07Hiz2B44EAqxHXSXKFuhrhlaB4XtN1botA+5ZeI8u03yKXMRwWeC5I12fE3MDv4K5XqoTIPrjyjTXl0Y7kMeD3r2rHJzaSMPVnZuXtsY717QjBxVxR8X1eHvAW5h+Dzz5tbqs+J2TfDioynGKy2dct8LdmoXheWvJNmgk8NpTjQ6KQNsZCZT+VnkFNU9NGwWYxrByACpT10V7Vkkq5y5eBCgwaqfsiLRxd2PmpKm0QkOckobybdx+icEKtLWWPjYmtPHvuRVDo9Tx2Opru4v7XpsUqhCrSnKT3Y6MUtkjBXRvdG9sbtV5BAPBIOKYUYAwPeDI7PVbnYcSU8YriccDdZ5uTsaPacvnRxozJXVP2+pb/APHjddoOyVw2NH4Rv8uKv6KM2/op6ucUvstHQbCzTUNLA4WeGXcN4c4lxHgTbwQp1C2VsYr3eT6sU0bXNc14DmkEEEXa4bwQsqrrpe0rNPCKSF1p5gdYjbGzYfE7O6/JcbwjsU28Iq3ScU7a6QYZrCMOs2x1ru36n4eF1t0OlLmnq6mMgjIuAs4d4WfRHCdVoneO272R8I4+Knp5MNeDFUPic8ZHWOqWcg7d5rKm42zcenKXc14p1QTzjJjo8Qhl/wAOQO5bHeW1bSVsbwTDWdqnxAB3wkGUeDmjJQlPjdTHk2YuA+Ltg+ag9BJ+z9yS1sV7ixEJKGls9vYjvxs79V6j0um96NhHLWH1UP6fd8EvO1fI5oS/RaVwusJGmI8faZ5qejkDgHNIcDsIzBVaymdb9SwPhbGftYuY9o21wMkA1X7Swey7u4FKrHHYciFZ6UtMMLAtUMFrmzwPQq3pdS89EhVtfT6okAscj9w2r6H5XU9ojheu4zvFw02aDvPHwV+21Qjkg25NKPc2cB0bAAlqBdxzDDsHf+iaANwQvMkgaC5xDQNpOQCxZ2Sse5ZjBQWx6Ql+t0rhbcRtMp4+yzzUZJpdN7sbAOesfqnQ0V0lnGBMtVVHbI5oSV/1dPb2I78bO/VaNTjtS/Iylo4N7AHlmmL8faR87WPdXXxRi8kgbyJzPhtS9XaVEnUpmEuOQcRc+DV8wTBMPk7VRiIvvaAY/Nzhn5JkpThjLRU74hIcgQdZzzw1v3U/KqtZayyHmet4TwhJwcwmtjGJ6/VF1pM9Vw4X/DsvbdsXS1JFGxjGRNa2MABobYNA3WsqG0rwjrGGVg+8YMx8Q/UJx6HNK+tjNBM68kQvETteze3/AE/LuVzS3Kcdinq6nF5LPQhCuFIhcV0poacubNUxtkaCSzWBk2XtbiufqvEftta+oqXhjXuLjc5NaPZYPCwUPUTOe5z3kue4kknaSTcleFydfUsZG1y6HnBZlFjFJrC87ABzSjpBhDdaSele2eC5LtU6z4b/ABDbbmoUQP8Agd5FeY5HNJ1SWkgg2Nrg5EJVGmjV7WPuvlZ7kZaCikmkbFE0ve42AH82K0MC6PqeMB1T9/JvGYib3Df4+SxdF2EBkLqpw7cpIaeDQbepB8gndRutecIjCCxlmrBhsDBZkMbB+FjW/RfKjCqd4tJBG8c2NP0W2SBmcgoHFNKIYtrmjm42v3DaVUdmO46NblwRmM9HtLICYCad/K74z3g7PBIssdXh0upIOyd22KQcQf4VYdDpjFIQAWOvuBLXHuvtUrXUlPWwujeNZp/PGdxHApkb1L0z3X2EqpQ9Uf2FTDa9kzA9h7wdrTwKyVlOJGPjOxwI7knNbLh9W6KT2QbO4Padjh/OITus/U0eDNOPD4L1F3ixw+SrHMIJYRmDa3NWVh1KI4o4x7oF+Z3+qTp6Yfb9TcZWnzs5PLiBcnIBT1U3JRRzTxw2zWxKvZCwvee4Da48AlOGKrxGXUjHZG7ZFEOJP8KNSXEKtsUeTSbC+xjRtcf5wCteipaeihbGwarR+eQ7yeJVuqqOnj1S9zKttsrpdMeCCwbo9pYwDOTUP59iMdwG3xKZafC6dgtHBGwfhY0fRQNbplEwkFzG23El5HfbYtzC9J4Zdjmnm03t3jaFF39XOTngNdiTnw2B4s+CN4/Exp+iVse6PqeQF1N9xJuGZid4bvDyTmDvGxCZGco8MU4p8nPtfRyQyOilaWPabEFTGj+EN1o56qRsENwW651XzW+Ebbc05dKOEB0Lapo7cZAceLScvI28yqwkkc4jWJcQABc3sBkAr0ZeJH4EP0ssytxmk1rtnYQeBSXJWClrGVFI8HVcHtschxaeW0dxUSad/wADvIrGq9ejjCTkmPs1MpxUWjpnBdK6Kp6sRVDDI9oPVlwEgyuRbiELmqmmcx7HsJa9pBaRtBBuChW+kqYGLTzDIY8Smp6YEM1mZbQ1zgCQOQJUhh+i0cbw97zJbYCLN8eK0KqTrsWndtHXzEdzSbfIJvaMwsjWamxS6UzW0lEHHqkiepWew3uCR+lTDoo3wTRsDXya+uRkHW1bG3HMp8p/ab3pe6UqIvpWyAZxPBPIHL52TtO8SRWv3JrQ4AUVLbZqD91MJT6NK8SUYjv2oXFpG+xNwfUjwTYixYkyMeBf0zxPqYXHle3HcB5lU79q15WyT3kGs0uG8i+YHgrU6R6Rz6clovYfIg/K6qFcpSzJ9x0/bFLg6LxXFcJloH60sJptQ6rQWhzcsg1u0OG4bVXfR/jb39l5u5pDSfiB2E8wq4Tp0c0ji9z7ZFzQOdsyparDjnuiOnj0trsyZ6WKAGOCoA7QdqE8QQSPKx80htxmpAAEzgAAAOAGQVldKcoFG1p2ukbbwBKWcD0ZgkpI55A7Xe94yNhYZfMFNU4Rq6prKQlRlKeIvcUzVya/Wl56z4ve4LYfjFQQWmZxBBBHFbsmGRitFOAeruN+fs32qVxzRuGOllnjDtZjmDM3FjcfOyFfTKUY43fBJ1Wxi3ngm+iegAjnqCO052oDwAAJ8yR5LV0/xt7eyw2c4kAj3WjbbmVMdFsoNG5o2tkeD4gFKnSJSOa9jrZAuaeW8ear3+q5J8ZG0bQbXJbdHi2ERULdWWEUmpmwlpc/LMFu0uO/fdc+RVZjkMkJLLEkDgL7DxWshWpYksMTCPS8pl36H4l10DTyBHLiPAgqdSp0d0jmU7dYWNvmSfqE1qlDgdb7iG0zA+w1V9mofnkkzorw6J7p5pGBz49TUJzDb3ubccgp/pMrxHSGO/amcABvsDcn0A8Vj6LqIspXSEZyvJHcMh63VpbVP7EPeZPVLM3DjdV/iGi0b3l7XmO+1oF2+HBWHVe0UuyjtO7ys622dbTi8GhTXGxYksiXohh8RxOnp6ga0fWFpGzWIvq35E2Qiuk6nEopRlqyQv8AIg/RfFp13NxTfcz7acTaXYMHP/2EhO3Xm+qcwUntZ1WKzMO6advq4BOCydb/AHDU0nsGGJ2YPctyvpGyxyRPF2PaWnxUXRvuxp8FL077tBVmuW2UU7Y4ZUeCVsmGVr45b6l9V9vebuePn5q3oZWuaHtIc1wBBGYI4pe0y0XbWMDmWbUMHZcdjh8J/mSRtH9JqjD3mnqI3OiBzjOT4+bf02FXGvEWVyVk+l78FsVMDXtLXbD6KuMe0AdrF8JsDuA1m+mYTxhOP0tQAYZmkn3CdWQeBUmqzi08rZj4z2xyipaDQGdzh1hNuDQRfxOxWNgeDMp2AAAECwA2N/nFbtZWxRN1pZGxt4uIaq90r091w6CjuAcjKcnHk0bu9SjVKb3eQlaksJYNDpAxU1VUymh7bYzqi3vvJzt6DzTNjL46Kmp4nHKNmdvfceHebqO0M0ebSsOIVv3ZaLta7awcSOJ2Ac1GjrMRqTUSAinabMYfe/m9S1Lj09PZBpoy689yKMNU4nEA0XBuG79UC17cLfqnPBZY62nnhBsZWWsfccMx65qbdhrBALAa3H6dyRqmKSgqBVQtvFf7yMbB+x3cFVjJSkuzXH6fBanH0vG67/8ATz0e4qaapfTTdhsh1Tf3Hg2F/UeSsLHcFZUNIIBJFiDsd+/NJ2l2BMq4xiFD2y4Xewe062+3xDYQvOimn2oGwVtyBkJRmRycN/er1tatXUihCbreCMrtAZ2uPVk24OBy8Re6ksA0AcHB8xvbOxFmjw2lWFR1sUrdaKRsjeLSHLOqzU+Gx3iLlIx08LWNDW7B6r1NK1rXPeQ1rQSScgBxUdi2kFLTg9dM0OHuA60h8Aq20g0lqcQeKeBjhETlGM3yc3H+AJ1dTf0hUp/7MWM1kmJ1rY4gdS+qy/ut3vPz8graoaRsUccTBZjGho8FB6G6MNo2FzrOqHjtOGxo+EcvmmCZ9gSu2zT2XCOQj37mhMbuJ5peebknmpqpfZrjyUIsvUvdI1NMtmxH0w//AEgjbqt+ZQsmNM62vZGMyXRM87fqhaNCfhxKNzXWyU6TKY0+LPkAs15jlHPZf1DlPtcCARmCpLpwwYvhhrGjOI6j/wC12w+By/1JW0Wrusga0ntR9k924+XySPyFfEh2gs26Rlw2axLTsOxTFNLqnPYUtAqXo6kOFj7Q9VWos/xY7UV90ToUbjWBU9U3VnjuRscOy9ncfpsXuCoLcjmPkt1kgOwq7GWN0UZRK0xLo1mBJp5mvHB92PHiLg+i0f8ApXGG9luvq8pmhv8AuVtoT1fLuK8NFU03R7WyG8z2R8S5xkf6fqnPR/QylpiH2M0w99/u/wBo3epTGscs4HM8FGV0mdVaK40pmmqa51HK/q4Iu0Gj+pkDfmc/BMuH0bY2gNAFhYAbAFAaescyanrmjYdR9uG70uPJMGHTh7AQbiwseI3Khqm8LHBpaXCT+SRD/uyOaj66lD2m4ByIIOwjgVs3WtXShrTna/pxVVSbawWFHGRUwKSWkroqeB2tDOQXRnPUGdz3gA/VNekGhlLUkvsYZj77Njv7hv8AQpb0KaZqqetI7Lewy/8AOH+5WHFO08jwWspuON9zKsim3hbFXVPR7XRm8L2ScC1xjf6/qsR0Vxh3Zdr25zNI/wByttCb5iQnw0VnhvRrKSDUTNYODLvefE2A9U9YLgVPSt1YI7E7XHtPf3n6bFJLy94G02UJ2ylyyUYJcHpaNTLrGw2D1RPUE5DIfNaNXUhg/EdgSJySWWPrrbZq4nNsYN2ZWivriTmdqitJK3qoHkHtO7LfHafJZ+9k/wBTRSVcP0I3Qen+1YvC612iR0l+AZm31DQvqbeg3BrNnrXD2vu2dwzcfPVHgUL0FUcRSMC6fVNlnYnQxzxSQSi8cjS1w5H6rnaWCXDa2SGW9gbE7pGnY4fPzC6USf0iaGtr4dZlm1UYOo45B4+A8uHA+KLa1OOAptcJZEyN4cA5puCLgjYV7a4g3BzSVhOKyUr3U9Q1zWtJBaR24j3cE4wyte0OYQ5p2EZgrBuplWzeqtjYiUp68bH5HjuW8x28HxCgF6ZIRsJHcuw1DXJGdCe6GJtQ4b7969fanclBNrpBvB7wvpr38vJO8zET5aRMvncdpWpPVNbvueAUZJUvO1x+SxJctT8DI6bHJ5xdv2hj435NIy5cCobRDEXMLqaXJ8ZItxH7fJTagtIcOeS2pgymZtA98fz0Ua59WYy7/wAk5x6cSiuP4HXWFr3ySfphiZIEEeckuQA2hv77PNfGaVR/Z9YntDLq/eJ/TmsOj9A9zjVz/wCI/wBkH3Rx8tnJTjDwsyl24OSl1+mPf+CawSL7PGyNudva4OO8qdgq2u32PAqHQlRuknklKmLQxsmcNhXv7U7kl6OoeNjj81lFe/kfBPWpj3K70zJt1S7jbuWFzt5PiVEurpOIHcFgfITtJK5LUrsdjpn3JCorwMm5njuUc9xJuTcr4vMkgaC5xDWjaTkAq8pymyzCEYI+ucACSbAZknYEl1HW4hVxwQC4J1WcAN7zy39wXrG8ZfUOFPThzmuIFgCXyncAOCt3o10KFDGZZgDVyDtbxCPgB+Z/RaOj0zXqkUNXqVjpQ0YJhkdNBFTxDsRtAHE8SeZNz4r6t5C1DIBCELoCpppoRT17dY/dVAFmytGZ5OG8Km8UwXEcMeddpEZOT29unk8dx77FdHrHLG1wLXAOaciCLg94S51xmsMbXdKHBz9Q6WxnKVhYeLe039VLw4tTu9mZnidU+RT1jPRlhs5Lmxmmed8J1W/lN2+QCU6zoYd/RrQRwfGW28QT8lQnoIvgvw177mD7XH/mN/MFhlxWnbtmZ4OBPovv/s3Wf9zBb/X+i3KXoXf/AFa0DkyMu9S4KC/H/Yx/kEQc+lNM3YXP/tb+tlHzaY/BD4ud9LKyqDoiw5ljI6Wc8C4MafygH1TFR6FYZF7FFEf729afN106OgguREtfLsUaNMJN8Tbd5UlQ6VQvIEgMRO89pnmrtfo/REWNJARwMTCPkk3SvospZmufRgU04zDbnqH8iPd7x5LstDBrZHIa+WdxOdgdMZBUW52uOrP4lrV+lMLCWsBlI4ZM80uPhrGvOHlrxJr6vVe8TwHLfw3q2NEuiqnia2SuHXzHPq7kQx8svaPpy3pUNG5P1vOB09Wor0rGSuHaYSbomgcySssWmPxw+LXfSyvmLR+iaNVtHABwETLfJadZoZhsvt0UPe1oiPm2xT3oa/gQtdMqGDSmmd7RczvF/ldb8WLU7tkzPEhp9U3V/RJhz79WZYD+F2u3/wAgT6qBquhd39KtB5Pjt6h30SZfj49h0fyHyawq4/8AMb+YLDNitO32pmDucCfIL6ehus/7mC3+v9Ft0nQw/wDq1rQODIy71JCgvx/2Tf5BC7W6WxNuImmQ8T2G/qtHD8NxHE36sTC5l83exTx95/5KtrBui/DYSHPY6peN8puz8osPO6coYWsaGMaGNGQa0BrW9wCtVaSECpbrJT2FTQnQOnoAJD99VEZyEZM4hg3d+0+ib0IVtLBTbbeWfUIQunAQhCABCEIAEIQgAQhCABCEIAEIQgDVNBCZBMYWGYC3WaretA4a21bSEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgD/9k=" 
                alt="Logo" 
                 style={{ height: '50px', borderRadius: '4px' }} 
            />
            <div>
              <h1 className="fw-bolder display-6 mb-0 text-white">DSA <span style={{ color: '#ff5e00' }}>Sheet</span></h1>
              <p className="text-secondary mb-0">Master algorithms! Be consistent.</p>
            </div>
          </div>
          <button 
            onClick={handleAddTopic}
            className="btn btn-orange d-flex align-items-center gap-2 mt-3 mt-md-0 shadow-lg"
          >
            <Plus size={18} />
            New Topic
          </button>
        </div>

        {/* Main Content */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="all-topics" type="TOPIC">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((topic, index) => (
                  <TopicItem key={topic.id} topic={topic} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {data.length === 0 && (
          <div className="text-center py-5 text-secondary border border-dashed border-secondary rounded mt-4">
            <p className="lead mb-0">No topics found. Start your grind!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;