import Image from "next/image";
import Head from "next/head"
export default function Home() {
    return (
        <>
            <Head>
                <title>BinauralS4</title>
            </Head>
            <div className="max-w-4xl mx-auto px-4 py-8 mb-14">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Binaural Audio Synthesis with the Structured State Space sequence model</h2>
                    <p className="text-md mt-2">by Kentaro Kitamura</p>
                </div>
                <h1 className="text-3xl font-bold text-center mb-4">About BinauralS4</h1>
                <p className="text-lg text-justify mb-4 mx-3">
                    The structured state-space sequence model (S4) is a recent innovation in sequence modeling that has shown excellent performance in handling long-range dependencies across a variety of tasks and modalities. In the field of speech processing, it has been found to be an alternative to the self-attention model in automatic speech recognition and in speech synthesis. In this study, a new model for synthesizing binaural speech is developed that represents the long relationship between mono speech using S4 and the latent state space between speaker and source location information. Each layer is conditioned with information common to both left and right sides of the speech, which is processed by location, binaural time difference, and pre-trained binaural speech. Compared to conventional methods, our model shows that speech synthesis is possible with similar quality. These results indicate that our model has the potential to extend the applicability of S4 in sequence modeling and into the domain of conditional speech synthesis.
                </p>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 mx-3">Listen to the Audio Samples</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
                        <AudioSample title="Recording" src="https://storage.googleapis.com/mos_example/mos/base/subject1.wav" />
                        <AudioSample title="DSP" src="https://storage.googleapis.com/mos_example/mos/geowarp/subject1.wav" />
                        <AudioSample title="ConvNet" src="https://storage.googleapis.com/mos_example/mos/warpnet/subject1.wav" />
                        <AudioSample title="BinauralGrad" src="https://storage.googleapis.com/mos_example/mos/binauralgrad/subject1.wav" />
                        <AudioSample title="BinauralS4(Our)" src="https://storage.googleapis.com/mos_example/mos/binaurals4/subject1.wav" />
                    </div>
                </div>
                <div className="overflow-x-auto mt-12">
                    <table className="table-auto w-full mb-12">
                        <caption className="text-lg font-semibold">Differences in performance by model</caption>
                        <thead>
                            <tr className="">
                                <th>Models</th>
                                <th>L2(&times;10<sup>-3</sup>)</th>
                                <th>Amp</th>
                                <th>Phase</th>
                                <th>MRSTFT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DSP</td>
                                <td>0.725</td>
                                <td>0.060</td>
                                <td>1.584</td>
                                <td>2.140</td>
                            </tr>
                            <tr className="">
                                <td>Warpnet</td>
                                <td>0.144</td>
                                <td>0.036</td>
                                <td><strong>0.804</strong></td>
                                <td>1.755</td>
                            </tr>
                            <tr>
                                <td>BinauralGrad</td>
                                <td>0.129</td>
                                <td><strong>0.030</strong></td>
                                <td>0.837</td>
                                <td><strong>1.282</strong></td>
                            </tr>
                            <tr className="">
                                <td><strong>Ours</strong></td>
                                <td><strong>0.121</strong></td>
                                <td>0.032</td>
                                <td>0.851</td>
                                <td>1.747</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table-auto w-full">
                        <caption className="text-lg font-semibold">Comparison by model trained with half the training data</caption>
                        <thead>
                            <tr className="">
                                <th>Models</th>
                                <th>L2(&times;10<sup>-3</sup>)</th>
                                <th>Amp</th>
                                <th>Phase</th>
                                <th>MRSTFT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BinauralGrad</td>
                                <td>0.142</td>
                                <td>0.037</td>
                                <td>1.080</td>
                                <td><strong>1.251</strong></td>
                            </tr>
                            <tr className="">
                                <td><strong>Ours</strong></td>
                                <td><strong>0.126</strong></td>
                                <td><strong>0.032</strong></td>
                                <td><strong>0.881</strong></td>
                                <td>1.750</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

function AudioSample({ title, src }) {
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <audio controls src={src}>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
