class InformationController {
  static SidebarInformation(req, res, next) {
    const sidebar = {
      insight: "api/whiteboard/user",
      threads: "api/whiteboard/threads",
      all_Dms: "api/whiteboard/messages",
      draft: "api/whiteboard/messages/notdelivered",
      files: "api/whiteboard/files",
      lounge: "api/whiteboard/lounge",
      integrate: "api/whiteboard/integrate",
      meeting_Rooms: "api/whiteboard/rooms",
      channels: "api/whiteboard/channels"
    };

    res.status(200).json(sidebar);
  }
};

module.exports = InformationController;