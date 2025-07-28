import express from 'express';
const app = express();
const router = express.Router();
import { Project, Event, Member } from '../models/model.js';

router.get('/projects-page', async (req, res)=>{
    try{
        const allProjects = await Project.find({});
        res.json({success: true, data: allProjects});

    }
    catch(error){
        res.json({success:false, message: error.message});

    }
     

});
//

router.get('/events-page', async (req, res)=>{
    try{
        const allEvents = await Event.find({});
        res.json({success: true, data: allEvents});

    }
    catch(error){
        res.json({success:false, message: error.message});

    }
     

});
//

router.get('/members-page', async (req, res)=>{
    try{
        const allMembers = await Member.find({});
        res.json({success: true, data: allMembers});

    }
    catch(error){
        res.json({success:false, message: error.message});
    }
});


router.post('/add/project', async (req, res) => {
    const project = req.body;
    //if not all fields are given
    const newProject = Project(project);
    try {
        await newProject.save();
        res.json({ success: true, message: "new project" });
        console.log("posted new project");
    }
    catch (error) {
        console.log("error:", error.message);
    }

});

//
router.post('/add/event', async (req, res) => {
    const event = req.body;
    //if not all fields are given
    const newEvent = Event(event);
    try {
        await newEvent.save();
        res.json({ success: true, message: "new event" });
        console.log("posted new event");
    }
    catch (error) {
        console.log("error:", error.message);
    }

});

//
router.post('/add/member', async (req, res) => {
    const member = req.body;
    //if not all fields are given
    const newMember = Member(member);
    try {
        await newMember.save();
        res.json({ success: true, message: "new member" });
        console.log("posted new member");
    }
    catch (error) {
        console.log("error:", error.message);
    }

});

export default router;