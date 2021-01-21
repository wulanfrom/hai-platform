import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom"; 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['UPLOAD', 'APPLY MODEL', 'GET EXPLANATION', 'SUMMARIZE & SHARE'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Upload pictures to apply the model on';
    case 1:
      return 'Label model to pictures';
    case 2:
      return 'Does the explanation make sense?';
    case 3:
      return 'What did you learn?';
    default:
      return 'Unknown step';
  }
}

export default function Progress(props) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const activeStep = props.currentStep;

  // const handleNext = (step) => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   props.parentCallBack(activeStep);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   props.parentCallBack(activeStep);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  // const nextDisabledHandler = (step) => {
  //       switch (step) {
  //           //for 0, if images are not uploaded, cannot proceed
  //           case 0:
  //               // console.log(props.imageCount);
  //               if (props.imageCount > 0) {
  //                   return 0
  //               }
  //               return 1;
  //           default:
  //               return 1
  //           //for 1, if all labels are not done, then cannot proceed
  //           //for 2, if all bales are not done, then cannot proceed
  //           //for 3 can always proceed
  //       }
  //   }

    // UploadFiles

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* The lower part with buttons and caption */}
      {/* <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                disabled={ nextDisabledHandler(activeStep) }
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
