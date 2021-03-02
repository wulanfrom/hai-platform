import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom"; 
import './Progress.css'

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
  return ['Upload Pictures', 'Get Label', 'Get Explanation', 'Summary', 'Improvements', 'Share your UI'];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return 'Upload pictures to apply the model on';
//     case 1:
//       return 'Label model to pictures';
//     case 2:
//       return 'Does the explanation make sense?';
//     case 3:
//       return 'What did you learn?';
//     case 4:
//       return 'How would you Improve the explanation model?'
//     case 5:
//       return 'Share your Findings with Others.'
//       default:
//       return 'Unknown step';
//   }
// }

export default function Progress(props) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const activeStep = props.currentStep;

  return (
    // <div className={classes.root}>
    <div className={'progressWrapper ' + classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
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
    </div>
  );
}
